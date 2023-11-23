function submitUserDetails() {
    // Get user input values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Create an object with the user details
    var userDetails = {
        username: username,
        email: email,
        password: password
    };

    // Use AJAX to send data to the server
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/your-server-endpoint', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Convert the user details object to a JSON string
    var data = JSON.stringify(userDetails);

    // Set up the callback function to handle the response from the server
    xhr.onload = function () {
        if (xhr.status === 200) {
            // The request was successful, handle the response here if needed
            console.log('User details submitted successfully');
        } else {
            // The request failed, handle the error here
            console.error('Error submitting user details');
        }
    };

    // Send the data to the server
    xhr.send(data);
}

function validatePassword(password) {
    // Password must be at least 8 characters long
    // It must contain at least one uppercase letter, one lowercase letter, one digit, and one special character
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return passwordRegex.test(password);
}

// Example usage:
var password = "SecurePassword123!";
if (validatePassword(password)) {
    console.log("Password is valid");
} else {
    console.log("Password is invalid");
}
function generateHTMLPage() {
    // Create the HTML content
    var htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Generated HTML Page</title>
        </head>
        <body>
            <h1>Hello, this is a generated HTML page!</h1>
            <p>This page was created by a JavaScript function.</p>
        </body>
        </html>
    `;

    // Open a new window with the generated HTML content
    var newWindow = window.open();
    newWindow.document.open();
    newWindow.document.write(htmlContent);
    newWindow.document.close();
}