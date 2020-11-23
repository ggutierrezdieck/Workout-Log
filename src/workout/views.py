from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from .serializer import WorkoutSerializer
from .models import workout


# Create your views here.


class WorkoutViewSet(viewsets.ModelViewSet):
    serializer_class = WorkoutSerializer
    workouts = workout.objects.all()
    authentication_classes = (TokenAuthentication,)

    def get_queryset(self):
        workouts = self.workouts
        userWorkouts = workouts.filter(user=self.request.user)
        return userWorkouts
