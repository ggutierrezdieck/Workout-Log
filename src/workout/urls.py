from django.urls import path, include
from rest_framework import routers
from .views import WorkoutViewSet
from rest_framework.authtoken.views import obtain_auth_token


router = routers.DefaultRouter()
router.register('workouts', WorkoutViewSet, basename='workout')

urlpatterns = [
    path('', include(router.urls)),
    path('auth/',obtain_auth_token ),
    ]
