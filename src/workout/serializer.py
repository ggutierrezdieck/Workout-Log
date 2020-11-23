from rest_framework import serializers
from .models import workout, excercise, personalRecord


class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = workout
        fields = '__all__'


class ExcerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = excercise
        fields = '__all__'


class PRSerializer(serializers.ModelSerializer):
    class Meta:
        model = personalRecord
        fields = '__all__'