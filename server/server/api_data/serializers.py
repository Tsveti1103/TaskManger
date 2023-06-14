from django.contrib.auth import get_user_model
from rest_framework import serializers

from server.api_data.models import Tasks

UserModel = get_user_model()


class TasksListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tasks
        fields = ('title', 'description', 'priority', 'id', 'date_created')


class TasksDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tasks
        fields = '__all__'


class TasksCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tasks
        exclude = ('user',)

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)


class TasksEditSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tasks
        exclude = ('user',)

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)
