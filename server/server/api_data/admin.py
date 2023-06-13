from django.contrib import admin

from server.api_data.models import Tasks


@admin.register(Tasks)
class PlacesAdmin(admin.ModelAdmin):
    pass
