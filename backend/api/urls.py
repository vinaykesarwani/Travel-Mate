from django.urls import path, include
from .views import test
from .views import MyTokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView
from .views import add_request, get_request, delete_request, get_all_request

urlpatterns = [
    path('', test, name='test'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('addrequest/', add_request, name='add_request'),
    path('getrequest/', get_request, name='get_request'),
    path('deleterequest/<int:pk>/delete/', delete_request, name='delete_request'),
    path('getallrequest/<int:trainNo>', get_all_request, name='get_all_request'),
]