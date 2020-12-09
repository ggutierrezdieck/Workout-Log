from rest_framework import viewsets, status
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework.decorators import action
from django.contrib.auth.models import User
from .serializer import WorkoutSerializer
from .models import workout, exercise


# Create your views here.


class WorkoutViewSet(viewsets.ModelViewSet):
    serializer_class = WorkoutSerializer
    workouts = workout.objects.all()
    authentication_classes = (TokenAuthentication,)

    def get_queryset(self):
        workouts = self.workouts
        userWorkouts = workouts.filter(user=self.request.user)
        return userWorkouts

    @action(detail=True, methods=['POST'])
    def updateWorkout(self, request, pk=None):
        # usr = request.data['user']
        usr = User.objects.get(id=1)
        try:
            try:
                wk = workout.objects.get(id=pk)
                if 'date' in request.data:
                    wk.workoutDate = request.data['date']
                
                elif 'effort' in request.data:
                    wk.effort = request.data['effort']
                else:
                    raise Exception
                wk.save()
                msg = 'Object ' + str(wk.id) + ' updated'
            except Exception as e:
                print(e)
                wk = workout.objects.create(user=usr, workoutDate=request.data['date'], effort=request.data['effort'])
                msg = 'Object ' + str(wk.id) + ' created'
            resp = status.HTTP_200_OK
        except Exception as e:
            print(e)
            msg = 'Please provide effort, date to update workout. Error ' + str(e)
            resp = status.HTTP_400_BAD_REQUEST
        response = {'message': msg,}
        return Response(response, status=resp)
