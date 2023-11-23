# user_authentication/urls.py
from django.urls import path
from .views import Login, Home, School, Timetable, register, login_view, dashboard

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', login_view, name='login'),
    path('Home/', Home, name='Home'),
    path('School/', School, name='School'),
    path('Timetable/', Timetable, name='Timetable'),
    path('', Login, name='Login'),
]
