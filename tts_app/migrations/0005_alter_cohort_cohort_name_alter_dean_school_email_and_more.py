# Generated by Django 4.2.6 on 2023-11-13 14:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("tts_app", "0004_holiday_cohort"),
    ]

    operations = [
        migrations.AlterField(
            model_name="cohort",
            name="cohort_name",
            field=models.CharField(max_length=10),
        ),
        migrations.AlterField(
            model_name="dean",
            name="school_email",
            field=models.CharField(max_length=50, unique=True),
        ),
        migrations.AlterField(
            model_name="lecturer",
            name="school_email",
            field=models.CharField(max_length=50, unique=True),
        ),
        migrations.AlterField(
            model_name="unit",
            name="unit_name",
            field=models.CharField(max_length=50),
        ),
    ]
