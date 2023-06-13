from django.contrib import admin
from django.contrib.auth import admin as auth_admin, get_user_model

UserModel = get_user_model()


@admin.register(UserModel)
class AppUserAdmin(auth_admin.UserAdmin):
    list_display = ('username', 'is_staff')
    fieldsets = (
        (None, {'fields': ('username', 'is_staff')}),)
    add_fieldsets = (
        (None, {
            'fields': ('username', 'password1', 'password2', 'is_staff'),
        }),
    )
