# Generated by Django 4.2.6 on 2023-11-12 11:13

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Cohort",
            fields=[
                (
                    "cohort_id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("cohort_name", models.CharField(max_length=8)),
            ],
        ),
        migrations.CreateModel(
            name="Dean",
            fields=[
                (
                    "dean_id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("first_name", models.CharField(max_length=20)),
                ("last_name", models.CharField(max_length=20)),
                ("school_email", models.CharField(max_length=30, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name="Department",
            fields=[
                (
                    "department_id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("department_name", models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name="Holiday",
            fields=[
                (
                    "holiday_id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("holiday_name", models.CharField(max_length=20)),
                ("start_date", models.DateField()),
                ("end_date", models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name="Lecturer",
            fields=[
                (
                    "lecturer_id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("first_name", models.CharField(max_length=20)),
                ("last_name", models.CharField(max_length=20)),
                ("date_of_birth", models.DateField()),
                ("school_email", models.CharField(max_length=20, unique=True)),
                ("school", models.CharField(max_length=50)),
                ("department_name", models.CharField(max_length=50)),
                ("status", models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name="LectureRoom",
            fields=[
                (
                    "room_id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("room_location", models.CharField(max_length=10)),
                ("room_capacity", models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name="School",
            fields=[
                (
                    "school_id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("school_name", models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name="Semester",
            fields=[
                (
                    "semester_id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("semester_name", models.CharField(max_length=20)),
                ("start_date", models.DateField()),
                ("end_date", models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name="Unit",
            fields=[
                (
                    "unit_id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("unit_name", models.CharField(max_length=20)),
                (
                    "department",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="tts_app.department",
                    ),
                ),
                (
                    "lecturer",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="tts_app.lecturer",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Timetable",
            fields=[
                (
                    "timetable_id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("day_of_the_week", models.CharField(max_length=10)),
                ("start_time", models.TimeField()),
                ("end_time", models.TimeField()),
                (
                    "lecturer",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="tts_app.lecturer",
                    ),
                ),
                (
                    "room",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="tts_app.lectureroom",
                    ),
                ),
                (
                    "semester",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="tts_app.semester",
                    ),
                ),
                (
                    "unit",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="tts_app.unit"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Student",
            fields=[
                (
                    "student_id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("first_name", models.CharField(max_length=20)),
                ("last_name", models.CharField(max_length=20)),
                ("date_of_birth", models.DateField()),
                ("school_email", models.CharField(max_length=20)),
                ("school", models.CharField(max_length=50)),
                ("department_name", models.CharField(max_length=50)),
                ("enrolled_year", models.IntegerField()),
                ("semester_in_session", models.BooleanField()),
                (
                    "cohort",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="tts_app.cohort"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="SchedulingConstraints",
            fields=[
                (
                    "constraint_id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("constraint_type", models.CharField(max_length=15)),
                ("constraint_description", models.CharField(max_length=50)),
            ],
            options={
                "indexes": [
                    models.Index(
                        fields=["constraint_type"], name="idx_schedulingConstraintsType"
                    )
                ],
            },
        ),
        migrations.AddIndex(
            model_name="lecturer",
            index=models.Index(
                fields=["department_name"], name="idx_lecturer_department_name"
            ),
        ),
        migrations.AddIndex(
            model_name="holiday",
            index=models.Index(fields=["start_date"], name="idx_holidays_start_date"),
        ),
        migrations.AddField(
            model_name="department",
            name="dean",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="tts_app.dean"
            ),
        ),
        migrations.AddField(
            model_name="department",
            name="school",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="tts_app.school"
            ),
        ),
        migrations.AddField(
            model_name="cohort",
            name="department",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="tts_app.department"
            ),
        ),
        migrations.AddIndex(
            model_name="unit",
            index=models.Index(fields=["department"], name="idx_unit_department_id"),
        ),
        migrations.AddIndex(
            model_name="timetable",
            index=models.Index(fields=["semester"], name="idx_timetables_semester_id"),
        ),
        migrations.AddIndex(
            model_name="student",
            index=models.Index(fields=["cohort"], name="idx_student_cohort_id"),
        ),
        migrations.AddIndex(
            model_name="department",
            index=models.Index(fields=["school"], name="idx_department_school_id"),
        ),
        migrations.AddIndex(
            model_name="cohort",
            index=models.Index(fields=["department"], name="idx_cohort_department_id"),
        ),
        migrations.AlterUniqueTogether(
            name="cohort",
            unique_together={("cohort_name", "department")},
        ),
    ]
