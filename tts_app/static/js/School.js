let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
	nav.classList.toggle("navclose");
})

function redirectToHomePage() {
    // Redirect the user to School
    window.location.href = '/Home/';
}

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

function redirectToProfilePage() {
    // Redirect the user to Settings
    window.location.href = '/Profile/';
}

function redirectToSettingsPage() {
    // Redirect the user to Settings
    window.location.href = '/Settings/';
}


// These will deal with the sub-page redirects
function redirectToECourses() {
    // Redirect the user to ECourses
    window.location.href = '/School/ECourses/';
}

function redirectToSCourses() {
    // Redirect the user to SCourses
    window.location.href = '/School/SCourses/';
}

function redirectToACourses() {
    // Redirects the user to ACourses
    window.location.href = '/School/ACourses/';
}

function redirectToBCourses() {
    // Redirect the user to BCourses
    window.location.href = '/School/BCourses';
}