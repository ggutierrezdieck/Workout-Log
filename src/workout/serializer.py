from rest_framework import serializers
from .models import workout, exercise, personalRecord


class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = exercise
        fields = ['id','exerciseName','sets','reps','effort']


class WorkoutSerializer(serializers.ModelSerializer):
    exercises = ExerciseSerializer(many=True,source='execises')
    class Meta:
        model = workout
        fields = ['id','workoutDate', 'exercises', 'numberOfExercises']


class PRSerializer(serializers.ModelSerializer):
    class Meta:
        model = personalRecord
        fields = '__all__'