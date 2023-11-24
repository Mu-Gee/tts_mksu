# user_authentication/urls.py
from django.urls import path
from .views import Login, Home, School, Courses, Timetable, Profile, Settings, ECourses, SCourses, ACourses, BCourses,TT

urlpatterns = [
    path('', Login, name='Login'),
    path('Home/', Home, name='Home'),
    path('School/', School, name='School'),
    path('Courses/', Courses, name='Courses'),
    path('Timetable/', Timetable, name='Timetable'),
    path('Profile/', Profile, name='Profile'),
    path('Settings/', Settings, name='Settings'),
    path('School/ECourses/', ECourses, name='ECourses' ),
    path('School/SCourses/', SCourses, name='SCourses'),
    path('School/ACourses/', ACourses, name='Acourses'),
    path('School/BCourses/', BCourses, name='BCourses'),
    path('TT/', TT, name='TT',)
]
