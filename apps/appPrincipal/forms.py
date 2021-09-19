from django.contrib.auth import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms

class NuevoUsuarioForm(UserCreationForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["username"].widget.attrs.update({
            'type': 'text',
            'class': 'form-control mb-4',
            'name': 'name',
            'id': 'name',
            'placeholder': 'Nombre'
        })
        self.fields["email"].widget.attrs.update({
            'type': 'email',
            'class': 'form-control mb-4',
            'name': 'email',
            'id': 'email',
            'placeholder': 'Email'
        })
        self.fields["password1"].widget.attrs.update({
            'type': 'password',
            'class': 'form-control mb-4',
            'name': 'password1',
            'id': 'pass',
            'placeholder':'Password'
        })
        self.fields["password2"].widget.attrs.update({
            'type': 'password',
            'class': 'form-control mb-4',
            'name': 'password2',
            'id': 'pass',
            'placeholder':'Repetir password'
        })
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2'] 