// Dummy student credentials
const students = [
  { username: "Demo", password: "De.4" },
  { username: "student2", password: "1234" },
  { username: "student3", password: "1234" },
  { username: "student4", password: "1234" },
  { username: "student5", password: "1234" },
  { username: "student6", password: "1234" },
  { username: "student7", password: "1234" },
  { username: "student8", password: "1234" },
  { username: "student9", password: "1234" },
  { username: "student10", password: "1234" },
  { username: "student11", password: "1234" },
  { username: "student12", password: "1234" },
  { username: "student13", password: "1234" }
];

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("loginMessage");

  const matched = students.find(
    (student) => student.username === username && student.password === password
  );

  if (matched) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "dashboard.html"; // next step
  } else {
    message.textContent = "Invalid username or password.";
  }
});
