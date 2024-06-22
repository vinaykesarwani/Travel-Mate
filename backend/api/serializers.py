from rest_framework import serializers
from .models import Passenger

class PassengerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Passenger
        fields = '__all__'

class GetRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model= Passenger
        fields= ['id', 'description']

class GetHelpSerializer(serializers.ModelSerializer):
    class Meta:
        model= Passenger
        fields= ['id', 'description', 'seatNo']