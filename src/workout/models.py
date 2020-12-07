from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.auth.models import User

# Create your models here.


# class user(models.Model):
#     GENDER = (
#             ('M', 'MALE'),
#             ('F', 'FEMALE'),
#         )

#     email = models.EmailField()
#     dob = models.DateField()
#     gender = models.CharField(max_length=10, choices=GENDER)


class workout(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,
                             related_name='workouts')
    workoutDate = models.DateField()
    effort = models.IntegerField(validators=[MinValueValidator(1),
                                 MaxValueValidator(5)], blank=True, null=True)

    # number of excersises
    def numberOfExercises(self):
        exercises = exercise.objects.filter(workout=self)
        return len(exercises)

    # Calulating workotu average effort
    # def workoutEffort(self):
    #     sum = 0
    #     exercises = exercise.objects.filter(workout=self)
    #     for ex in exercises:
    #         sum += ex.effort
    #     if len(exercises) > 0:
    #         return sum / len(exercises)
    #     else: 
    #         return 0

class exercise(models.Model):
    workout = models.ForeignKey(workout, on_delete=models.CASCADE,
                                related_name='execises')
    exerciseName = models.CharField(max_length=250)
    sets = models.IntegerField(blank=True)
    reps = models.IntegerField(blank=True)


class personalRecord(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,
                             related_name='usersPRs')
    exercise = models.ForeignKey(workout, on_delete=models.CASCADE,
                                  related_name='PR')
    exerciseName = models.CharField(max_length=250)
    weightReps = models.CharField(max_length=10)
