# Generated by Django 4.2.6 on 2023-11-13 13:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("tts_app", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="student",
            name="school_email",
            field=models.CharField(max_length=50),
        ),
    ]