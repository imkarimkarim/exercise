from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("jamshid/", views.jamshid, name="jamshid"),
    path("jamshi/", views.jamshi, name="jamshi"),
]