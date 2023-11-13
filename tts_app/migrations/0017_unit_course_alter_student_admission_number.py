# Generated by Django 4.2.6 on 2023-11-13 20:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("tts_app", "0016_alter_student_course"),
    ]

    operations = [
        migrations.AddField(
            model_name="unit",
            name="course",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="tts_app.course",
            ),
        ),
        migrations.AlterField(
            model_name="student",
            name="admission_number",
            field=models.CharField(max_length=20, null=True),
        ),
    ]