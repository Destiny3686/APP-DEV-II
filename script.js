// Function to save user account information
function saveAccountInfo(username, userData) {
    localStorage.setItem(username, JSON.stringify(userData));
}

// Function to retrieve user account information
function getAccountInfo(username) {
    const userData = localStorage.getItem(username);
    return userData ? JSON.parse(userData) : null;
}

// Function to create an account
function createAccount(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate the form fields (you may add more validation)
    if (!firstName || !lastName || !email || !username || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Create an object to store user information
    const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password
    };

    // Save user information in localStorage (replace with server-side storage in a real application)
    saveAccountInfo(username, userData);

    // Redirect to the sign-in page or any other page
    window.location.href = 'signin.html';
}

// Function to authenticate user
function authenticateUser(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const userData = getAccountInfo(username);

    if (userData && userData.password === password) {
        // Authentication successful, redirect to the budget page or any other page
        window.location.href = 'budget.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
