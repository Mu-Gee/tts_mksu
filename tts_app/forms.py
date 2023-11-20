# user_authentication/forms.py
from django import forms
from .models import UserProfile

class UserForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = ['username', 'password']
