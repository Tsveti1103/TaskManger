from django.db.models import Count
from rest_framework import generics as rest_generic_views, permissions
# from rest_framework.parsers import MultiPartParser, FormParser
from server.api_data.models import Tasks
from server.api_data.serializers import TasksCreateSerializer, TasksListSerializer, TasksDetailsSerializer, \
    TasksEditSerializer


class CreateTasksApiView(rest_generic_views.CreateAPIView):
    queryset = Tasks.objects.all()
    serializer_class = TasksCreateSerializer
    # parser_classes = (MultiPartParser, FormParser)
    permission_classes = (
        permissions.IsAuthenticated,
    )


class DeleteTasksApiView(rest_generic_views.DestroyAPIView):
    queryset = Tasks.objects.all()


class EditTasksApiView(rest_generic_views.UpdateAPIView):
    queryset = Tasks.objects.all()
    serializer_class = TasksEditSerializer
    # parser_classes = (MultiPartParser, FormParser)



class DetailsTasksApiView(rest_generic_views.RetrieveAPIView):
    queryset = Tasks.objects.all()
    serializer_class = TasksDetailsSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        queryset = self.queryset
        queryset = queryset.order_by('-id')
        return queryset


class ListAllTasksApiView(rest_generic_views.ListAPIView):
    queryset = Tasks.objects.all()
    serializer_class = TasksListSerializer

    def get_queryset(self):
        queryset = self.queryset
        queryset = queryset.filter(user=self.request.user.pk)
        queryset = queryset.order_by('-id')
        return queryset

