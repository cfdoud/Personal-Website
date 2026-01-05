from rest_framework import generics
from .models import Project
from .serializers import ProjectSerializer
from django.shortcuts import render


class ProjectListCreate(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

def index(request):
    return render(request, 'index.html')
