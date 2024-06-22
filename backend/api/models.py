from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Passenger(models.Model):
    user=models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    trainNo=models.IntegerField(null=False, blank=False)
    trainStartingDate=models.CharField(max_length=20, null=False, blank=False)
    seatNo=models.CharField(max_length=20, null=False, blank=False)
    description=models.TextField(null=False, blank=False)
    
    def __str__(self):
        return self.description[:50]