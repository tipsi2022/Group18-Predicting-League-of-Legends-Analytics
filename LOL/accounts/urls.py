from django.urls import path, include
from django.contrib.auth import views as auth
from . import views 

urlpatterns = [
    path('login/', auth.LoginView.as_view(template_name ='accounts/login.html'), name ='login'),
    path('logout/', auth.LogoutView.as_view(template_name ='accounts/logout.html'), name ='logout'),
    path('signup/', views.signup, name ='signup'),
]