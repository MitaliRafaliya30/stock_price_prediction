document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        let email = document.getElementById("login_email").value;
        let password = document.getElementById("login_password").value;

        // Simple validation
        if (email === "" || password === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Simulate authentication (Replace this with backend API request)
        if (email === "mira@gmail.com" && password === "Mira@123") {
            alert("Login Successful! Redirecting...");
            window.location.href = "/dashboard"; // Redirect to dashboard
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
});
