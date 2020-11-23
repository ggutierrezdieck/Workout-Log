from rest_framework import viewsets, status
from .serializer import WorkoutSerializer
from .models import workout
# from rest_framework.authentication import TokenAutenthication

# Create your views here.


class WorkoutViewSet(viewsets.ModelViewSet, id):
    serializer_class = WorkoutSerializer
    queryset = workout.objects.all().filter(user_id=id)
