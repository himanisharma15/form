document.addEventListener("DOMContentLoaded", function () {
    // Fetch username from local storage or session (For demo purpose)
    let username = localStorage.getItem("username") || "Guest";
    document.getElementById("username-display").innerText = username;

    // Logout Function
    document.getElementById("logout-btn").addEventListener("click", function () {
        alert("Logging out...");
        localStorage.removeItem("username"); // Clear username
        window.location.href = "login.html"; // Redirect to login page
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Check if user is logged in
    let username = localStorage.getItem("username");

    if (!username) {
        alert("You are not logged in! Redirecting to login page...");
        window.location.href = "login.html";
        return;
    }

    // Display the logged-in username
    document.getElementById("username-display").innerText = username;

    // Simulated user stats (Replace with real data if using backend)
    let userStats = {
        logins: localStorage.getItem("totalLogins") || 5,
        settingsChanged: localStorage.getItem("settingsChanged") || 2,
        lastLogin: localStorage.getItem("lastLogin") || "Feb 28, 2025"
    };

    // Display stats in widgets
    document.querySelector(".widget:nth-child(1) p").innerText = userStats.logins;
    document.querySelector(".widget:nth-child(2) p").innerText = userStats.settingsChanged;
    document.querySelector(".widget:nth-child(3) p").innerText = userStats.lastLogin;

    // Logout function
    document.getElementById("logout-btn").addEventListener("click", function () {
        let confirmLogout = confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            localStorage.removeItem("username"); // Clear session
            window.location.href = "login.html"; // Redirect to login
        }
    });
});
