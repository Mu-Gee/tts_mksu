from django.contrib import admin
from tts_app.models import School, Dean, Department, Cohort, Semester, Student, Lecturer, LectureRoom, Unit, Course, Timetable, Holiday, SchedulingConstraints

# Register your models here.
@admin.register(School)
class SchoolAdmin(admin.ModelAdmin):
    pass

@admin.register(Dean)
class DeanAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "school")
    list_filter = ("department", "school")

@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    pass

@admin.register(Cohort)
class CohortAdmin(admin.ModelAdmin):
    pass

@admin.register(Semester)
class SemesterAdmin(admin.ModelAdmin):
    list_display = ("semester_name", "start_date", "end_date")

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "admission_number", "course", "department")
    list_filter = ("department", "school", "course")
    search_fields = ("first_name", )

@admin.register(Lecturer)
class LecturerAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "school_email", "department", "school")
    list_filter = ("department", "school")

@admin.register(LectureRoom)
class LectureRoomAdmin(admin.ModelAdmin):
    pass

@admin.register(Unit)
class UnitAdmin(admin.ModelAdmin):
    list_display = ("unit_code", "unit_name", "course", "lecturer")

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ("course_name", "department", "school")

@admin.register(Timetable)
class TimetableAdmin(admin.ModelAdmin):
    pass

@admin.register(Holiday)
class HolidayAdmin(admin.ModelAdmin):
    pass

@admin.register(SchedulingConstraints)
class SchedulingConstraintsAdmin(admin.ModelAdmin):
    pass

