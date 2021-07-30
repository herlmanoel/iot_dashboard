from django.urls import path

from . import views

app_name = "iot_dashboard"

urlpatterns = [
    path("", views.home, name="home"),
    path("getData/", views.getData, name="getData"),
    path("getJson/", views.getJson, name="getJson"),
    path("getJsonPrev/", views.getJsonPrev, name="getJsonPrev"),
    path('getJsonComum/', views.getJsonComum, name="getJsonComum"),
]

