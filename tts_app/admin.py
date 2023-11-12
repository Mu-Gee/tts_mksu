from django.contrib import admin
from tts_app.models import School, Dean, Department, Cohort, Semester, Student, Lecturer, LectureRoom, Unit, Timetable, Holiday, SchedulingConstraints

# Register your models here.
@admin.register(School)
class SchoolAdmin(admin.ModelAdmin):
    pass

@admin.register(Dean)
class DeanAdmin(admin.ModelAdmin):
    pass

@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    pass

@admin.register(Cohort)
class CohortAdmin(admin.ModelAdmin):
    pass

@admin.register(Semester)
class SemesterAdmin(admin.ModelAdmin):
    pass

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    pass

@admin.register(Lecturer)
class LecturerAdmin(admin.ModelAdmin):
    pass

@admin.register(LectureRoom)
class LectureRoomAdmin(admin.ModelAdmin):
    pass

@admin.register(Unit)
class UnitAdmin(admin.ModelAdmin):
    pass

@admin.register(Timetable)
class TimetableAdmin(admin.ModelAdmin):
    pass

@admin.register(Holiday)
class HolidayAdmin(admin.ModelAdmin):
    pass

@admin.register(SchedulingConstraints)
class SchedulingConstraintsAdmin(admin.ModelAdmin):
    pass

