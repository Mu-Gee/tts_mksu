from django.db import models
import uuid

# Create your models here.
class School(models.Model):
    school_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    school_name = models.CharField(max_length=50)

    def __str__(self):
        return self.school_name


class Dean(models.Model):
    dean_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    school_email = models.CharField(max_length=30, unique=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    

class Department(models.Model):
    department_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    department_name = models.CharField(max_length=50)
    school = models.ForeignKey(School, on_delete=models.CASCADE)
    dean = models.ForeignKey(Dean, on_delete=models.CASCADE)

    class Meta:
        indexes = [
            models.Index(fields=['school'], name='idx_department_school_id'),
        ]

    def __str__(self):
        return f"{self.department_name} - {self.school}"
    

class Cohort(models.Model):
    cohort_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    cohort_name = models.CharField(max_length=8)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('cohort_name', 'department')
        indexes = [
            models.Index(fields=['department'], name='idx_cohort_department_id'),
            ]
        
    def __str__(self):
        return f"{self.cohort_name} - {self.department}"


class Semester(models.Model):
    semester_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    semester_name = models.CharField(max_length=20)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.semester_name


class Student(models.Model):
    student_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    date_of_birth = models.DateField()
    school_email = models.CharField(max_length=20)
    school = models.CharField(max_length=50)
    department_name = models.CharField(max_length=50)
    cohort = models.ForeignKey(Cohort, on_delete=models.CASCADE)
    enrolled_year = models.IntegerField()
    semester_in_session = models.BooleanField()

    class Meta:
        indexes = [
            models.Index(fields=['cohort'], name='idx_student_cohort_id'),
        ]
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Lecturer(models.Model):
    lecturer_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    date_of_birth = models.DateField()
    school_email = models.CharField(max_length=20, unique=True)
    school = models.CharField(max_length=50)
    department_name = models.CharField(max_length=50)
    status = models.BooleanField()
    
    class Meta:
        indexes = [
            models.Index(fields=['department_name'], name='idx_lecturer_department_name'),
        ]

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    

class LectureRoom(models.Model):
    room_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    room_location = models.CharField(max_length=10)
    room_capacity = models.IntegerField()

    def __str__(self):
        return f"Room{self.room_id} - {self.room_location}"


class Unit(models.Model):
    unit_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    unit_name = models.CharField(max_length=20)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    lecturer = models.ForeignKey(Lecturer, on_delete=models.CASCADE)

    class Meta:
        indexes = [
            models.Index(fields=['department'], name='idx_unit_department_id'),
        ]

    def __str__(self):
        return self.unit_name
    

class Timetable(models.Model):
    timetable_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    unit = models.ForeignKey(Unit, on_delete=models.CASCADE)
    lecturer = models.ForeignKey(Lecturer, on_delete=models.CASCADE)
    room = models.ForeignKey(LectureRoom, on_delete=models.CASCADE)
    day_of_the_week = models.CharField(max_length=10)
    start_time = models.TimeField()
    end_time = models.TimeField()
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE)

    class Meta:
        indexes = [
            models.Index(fields=['semester'], name='idx_timetables_semester_id'),
        ]

    def __str__(self):
        return f"Timetable for {self.unit} on {self.day_of_the_week} from {self.start_time} to {self.end_time}"


class Holiday(models.Model):
    holiday_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    holiday_name = models.CharField(max_length=20)
    start_date = models.DateField()
    end_date = models.DateField()

    class Meta:
        indexes = [
            models.Index(fields=['start_date'], name='idx_holidays_start_date'),
        ]

    def __str__(self):
        return self.holiday_name
    

class SchedulingConstraints(models.Model):
    constraint_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    constraint_type = models.CharField(max_length=15)
    constraint_description = models.CharField(max_length=50)

    class Meta:
        indexes = [
            models.Index(fields=['constraint_type'], name='idx_schedulingConstraintsType'),
        ]

    def __str__(self):
        return self.constraint_type
    

