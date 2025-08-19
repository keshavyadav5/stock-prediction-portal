from django.urls import path
from accounts import views as userView

urlpatterns = [
    path('register/', userView.RegisterView.as_view())
]