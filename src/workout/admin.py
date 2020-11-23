from django.contrib import admin
from .models import exercise, workout, personalRecord


# Register your models here.
admin.site.register(exercise)
admin.site.register(workout)
admin.site.register(personalRecord)