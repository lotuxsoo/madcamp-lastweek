from django.urls import path
from . import views

urlpatterns = [

    path('', views.index),
    path('form/', views.form),
    path('result/', views.result),
    path('test1/', views.test1),
    path('test2/', views.test2),
    # path("hello/", views.helloAPI),
    # path('developers/', views.developer_list),
    # path('questions/', views.question_list),
    # path('choices/', views.choice_list),
]
