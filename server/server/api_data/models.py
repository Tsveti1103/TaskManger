from django.core.validators import MaxValueValidator
from django.db import models
from django.contrib.auth import get_user_model

UserModel = get_user_model()

class Tasks(models.Model):
    MAX_TITLE_LENGTH = 30
    MAX_PRIORITY_VALUE = 10

    title = models.CharField(
        max_length=MAX_TITLE_LENGTH,
        null=False,
        blank=False,
        unique=True,
    )

    description = models.TextField()
    priority = models.PositiveSmallIntegerField(
        validators=[
            MaxValueValidator(MAX_PRIORITY_VALUE)
        ]
    )

    user = models.ForeignKey(
        UserModel,
        on_delete=models.CASCADE,
        null=True,
    )
    date_created = models.DateTimeField(
        auto_now_add=True,
    )
    def __str__(self):
        return self.title