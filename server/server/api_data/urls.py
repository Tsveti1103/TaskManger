from django.urls import path

from server.api_data.views import CreateTasksApiView, DeleteTasksApiView, EditTasksApiView,\
    DetailsTasksApiView, ListAllTasksApiView
urlpatterns = (
    path('all', ListAllTasksApiView.as_view(), name="all tasks"),
    path('create', CreateTasksApiView.as_view(), name="create task"),
    path('details/<int:pk>', DetailsTasksApiView.as_view(), name="details task"),
    path('delete/<int:pk>', DeleteTasksApiView.as_view(), name="delete task"),
    path('edit/<int:pk>', EditTasksApiView.as_view(), name="edit task"),
)
