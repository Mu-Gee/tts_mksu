# Generated by Django 4.2.6 on 2023-11-13 14:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("tts_app", "0003_alter_student_department_name_alter_student_school"),
    ]

    operations = [
        migrations.AddField(
            model_name="holiday",
            name="cohort",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="tts_app.cohort",
            ),
        ),
    ]
