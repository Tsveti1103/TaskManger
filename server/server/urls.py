from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('tasks/', include('server.api_data.urls')),
    path('user/', include('server.api_auth.urls')),
]
