from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenRefreshView
from .serializers import PassengerSerializer, GetRequestSerializer, GetHelpSerializer
from rest_framework import status
from .models import Passenger

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        return token
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class=MyTokenObtainPairSerializer

@api_view(['GET'])
def test(request):
    
    return Response('Hello')

@api_view(['POST'])
def add_request(request):
    serializer = PassengerSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_request(request):
    user = request.user
    previous_requests = Passenger.objects.filter(user=user)
    serializer=GetRequestSerializer(previous_requests, many=True)
    return Response(serializer.data)

@api_view(['DELETE'])
def delete_request(request, pk):
    passenger=Passenger.objects.get(id=pk)
    passenger.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def get_all_request(request, trainNo):
    previous_requests = Passenger.objects.filter(trainNo=trainNo)
    serializer=GetHelpSerializer(previous_requests, many=True)
    return Response(serializer.data)