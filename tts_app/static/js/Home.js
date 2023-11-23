let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
	nav.classList.toggle("navclose");
})

function redirectToSchoolPage() {
    // Redirect the user to School
    window.location.href = '/School/';
}

function redirectToCoursePage() {
    // Redirect the user to Course
    window.location.href = '/Courses/';
}

function redirectToTimetablePage() {
    // Redirect the user to Timetable
    window.location.href = '/Timetable/';
}

function redirectToSettingsPage() {
    // Redirect the user to Settings
    window.location.href = '/Settings/';
}