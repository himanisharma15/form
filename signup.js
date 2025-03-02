document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("signup-username").value.trim();
    let email = document.getElementById("signup-email").value.trim();
    let password = document.getElementById("signup-password").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let userExists = users.some(user => user.username === username || user.email === email);

    if (userExists) {
        alert("⚠️ User already exists! Try a different username or email.");
    } else {
        users.push({ username, email, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert(" Signup successful! Redirecting to login");
        window.location.href = "login.html"; // Redirect after signup
    }
});
