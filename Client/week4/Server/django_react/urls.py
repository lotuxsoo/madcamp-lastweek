from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('form/', views.form),
    path('result/', views.result),
    path('test1/', views.test1)
]
