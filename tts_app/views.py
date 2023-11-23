from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages
from .forms import UserForm
from .models import UserProfile
from django.contrib.auth.decorators import login_required
# Create your views here.

# user_authentication/views.py
def register(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form = UserForm()

    return render(request, 'register.html', {'form': form})


# Implement login logic here
def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            # Redirect to the dashboard or any other page after successful login
            return redirect('dashboard')
        else:
            messages.error(request, 'Invalid login credentials.')

    form = UserForm()
    return render(request, 'login.html', {'form': form})



@login_required(login_url='login')
def dashboard(request):
    # Implement dashboard logic here
    user = request.user
    context = {'user': user}
    return render(request, 'dashboard.html', context)

def Login(request):
    return render(request, 'Login.html')

def Home(request):
    return render(request, 'Home.html')

def School(request):
    return render(request, 'School.html')

def Courses(request):
    return render(request, 'School.html')

def Timetable(request):
    return render(request, 'School.html')

def Profile(request):
    return render(request, 'Settings.html')

def Settings(request):
    return render(request, 'Settings.html')