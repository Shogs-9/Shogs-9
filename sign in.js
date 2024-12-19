const form = document.getElementById('signinForm');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById('email');
    const password = document.getElementById('password');

    // Reset error messages
    document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');

    let isValid = true;

    // Validate Email
    if (!isValidEmail(email.value.trim())) {
        setError(email, 'Enter a valid email address');
        isValid = false;
    }

    // Validate Password
    if (password.value.trim() === '') {
        setError(password, 'Password is required');
        isValid = false;
    }

    // If the form is valid, simulate success
    if (isValid) {
        alert('Sign In Successful!');
        form.reset();
    }
});

// Helper function to display error messages
function setError(input, message) {
    const inputGroup = input.parentElement;
    const errorMessage = inputGroup.querySelector('.error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

// Helper function to validate email format
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
