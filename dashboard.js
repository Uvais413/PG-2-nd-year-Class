const subjects = [
  "Qur'an", "Hadith", "Fiqh", "Aqeedah", "Islamic History",
  "Arabic Language", "Ethics", "Biography", "Politics", "Contemporary Issues"
];

// Show student name
const user = localStorage.getItem("loggedInUser");
document.getElementById("welcomeText").textContent = `Welcome, ${user}`;

// Load subjects
const subjectGrid = document.querySelector(".subject-grid");

subjects.forEach((subj, index) => {
  const card = document.createElement("div");
  card.className = "subject-card";
  card.innerHTML = `
    <h3>${subj}</h3>
    <a href="subject.html?sub=${encodeURIComponent(subj)}" class="btn-secondary">Enter</a>
  `;
  subjectGrid.appendChild(card);
});

// Track time spent (add this at top)
let seconds = 0;

setInterval(() => {
  seconds++;
  const total = parseInt(localStorage.getItem("timeSpent")) || 0;
  localStorage.setItem("timeSpent", total + 1);
}, 1000);

// Save login time
if (!localStorage.getItem("lastLogin")) {
  localStorage.setItem("lastLogin", new Date().toLocaleString());
}
