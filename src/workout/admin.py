from django.contrib import admin
from .models import excercise, workout, personalRecord


# Register your models here.
admin.site.register(excercise)
admin.site.register(workout)
admin.site.register(personalRecord)