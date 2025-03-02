const users = JSON.parse(localStorage.getItem("users")) || [];
const formTitle = document.getElementById("form-title");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const contactInput = document.getElementById("contact");
const submitBtn = document.getElementById("submit-btn");
const toggleForm = document.getElementById("toggle-form");
const formContainer = document.getElementById("form-container");
let isLogin = false;

toggleForm.addEventListener("click", () => {
    isLogin = !isLogin;
    formTitle.innerText = isLogin ? "Login" : "Sign Up";
    submitBtn.innerText = isLogin ? "Login" : "Sign Up";
    contactInput.style.display = isLogin ? "none" : "block";
});

submitBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const contact = contactInput.value.trim();

    if (!validateEmail(email)) return;
    if (!validatePassword(password)) return;
    if (!isLogin && !validateContact(contact)) return;

    if (isLogin) {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            alert("Login successful!");
            localStorage.setItem("loggedInUser", email);
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid credentials!");
        }
    } else {
        if (users.find(u => u.email === email)) {
            alert("Email already registered!");
            return;
        }
        users.push({ email, password, contact });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Signup successful! Please login.");
        toggleForm.click();
    }
});

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
        document.getElementById("email-error").innerText = "Invalid email format!";
        return false;
    }
    document.getElementById("email-error").innerText = "";
    return true;
}

function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,16}$/;
    if (!regex.test(password)) {
        document.getElementById("password-error").innerText = "Password must contain 8-16 chars, uppercase, lowercase, digit, special char!";
        return false;
    }
    document.getElementById("password-error").innerText = "";
    return true;
}

function validateContact(contact) {
    const regex = /^\\+?[1-9]\\d{1,14}$/;
    if (!regex.test(contact)) {
        document.getElementById("contact-error").innerText = "Invalid contact number!";
        return false;
    }
    document.getElementById("contact-error").innerText = "";
    return true;
}



// Toggle Password Visibility
function togglePassword() {
    let passwordInput = document.getElementById("login-password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

// Handle Login Form Submission
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    // Simulating user authentication (Replace with real logic)
    if (username === "user" && password === "pass123") {
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect to another page
    } else {
        alert("Invalid Credentials! Try again.");
    }
});

// Handle Forgot Password Form Submission
document.addEventListener("DOMContentLoaded", function () {
    let forgotPasswordForm = document.getElementById("forgot-password-form");
    
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let email = document.getElementById("reset-email").value;
            
            // Simulate password reset (Replace with actual backend request)
            alert("Password reset link has been sent to " + email);
        });
    }
});




// Toggle Password Visibility
function togglePassword(inputId) {
    let input = document.getElementById(inputId);
    let icon = input.nextElementSibling; // Select the 👁️ icon

    if (input.type === "password") {
        input.type = "text";
        icon.innerText = "🙈"; // Change icon to closed eye
    } else {
        input.type = "password";
        icon.innerText = "👁️"; // Change icon back to open eye
    }
}

// Validate Form
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("signup-username").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    let isValid = true;

    // Username Validation
    let usernameRegex = /^[a-zA-Z0-9]{4,}$/;
    if (!usernameRegex.test(username)) {
        document.getElementById("username-error").innerText = "Username must be at least 4 characters (only letters & numbers)";
        isValid = false;
    } else {
        document.getElementById("username-error").innerText = "";
    }

    // Email Validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("email-error").innerText = "Enter a valid email address";
        isValid = false;
    } else {
        document.getElementById("email-error").innerText = "";
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
        document.getElementById("confirm-password-error").innerText = "Passwords do not match!";
        isValid = false;
    } else {
        document.getElementById("confirm-password-error").innerText = "";
    }

    // If everything is valid, show success message
    if (isValid) {
        alert("Sign-up Successful! 🎉");
        window.location.href = "login.html"; // Redirect to login page
    }
});

// Password Strength Indicator
document.getElementById("signup-password").addEventListener("input", function() {
    let password = this.value;
    let strengthText = "Weak";
    let strengthColor = "red";

    if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password)) {
        strengthText = "Strong";
        strengthColor = "green";
    } else if (password.length >= 6) {
        strengthText = "Medium";
        strengthColor = "orange";
    }

    let strengthIndicator = document.getElementById("password-strength");
    strengthIndicator.innerText = `Password Strength: ${strengthText}`;
    strengthIndicator.style.color = strengthColor;
});
