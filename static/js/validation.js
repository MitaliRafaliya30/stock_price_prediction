document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", function (event) {
        let valid = true;

        // Username validation
        const username = document.getElementById("username");
        if (username.value.trim() === "") {
            username.classList.add("is-invalid");
            valid = false;
        } else {
            username.classList.remove("is-invalid");
        }

        // Email validation
        const email = document.getElementById("email");
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email.value)) {
            email.classList.add("is-invalid");
            valid = false;
        } else {
            email.classList.remove("is-invalid");
        }

        // Password validation (at least 6 characters & 1 number)
        const password = document.getElementById("password");
        const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$/;
        if (!passwordPattern.test(password.value)) {
            password.classList.add("is-invalid");
            valid = false;
        } else {
            password.classList.remove("is-invalid");
        }

        // Confirm Password validation
        const confirmPassword = document.getElementById("confirmPassword");
        if (confirmPassword.value !== password.value) {
            confirmPassword.classList.add("is-invalid");
            valid = false;
        } else {
            confirmPassword.classList.remove("is-invalid");
        }

        if (!valid) {
            event.preventDefault();
        } else {
            event.preventDefault(); // Prevent form submission for demo purposes
            alert("Registration Successful! Redirecting to login...");
            window.location.href = "/login"; // Redirect to login page after success
        }
    });
});
