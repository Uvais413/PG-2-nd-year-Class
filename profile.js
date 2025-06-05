const user = localStorage.getItem("loggedInUser");
document.getElementById("profileName").textContent = `Welcome, ${user}`;

// Show last login date
const lastLogin = localStorage.getItem("lastLogin");
document.getElementById("lastLogin").textContent = lastLogin || "No login data";

// Show time spent
const minutesSpent = Math.floor((parseInt(localStorage.getItem("timeSpent")) || 0) / 60);
document.getElementById("timeSpent").textContent = minutesSpent;

// Logout function
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}
