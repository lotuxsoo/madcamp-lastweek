from django.urls import path
from . import views

urlpatterns = [
    # path('', views.index),
    path('test1/', views.test1),
    path('test2/', views.test2),
    path('test4/', views.test4),
    path('test3/', views.test3),
]
