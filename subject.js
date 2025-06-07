//  content for each subject
const subjectData = {
  "Qur'an": {
    points: ["Revelation stages", "Makki vs Madani", "Tajweed basics"],
    notes: "Qur’an is the final revelation. It was revealed over 23 years...",
    audio: "../assets/audio/quran.mp3",
    pdf: "../assets/pdfs/quran.pdf",
    links: ["https://quran.com", "https://alquran.cloud"]
  },
  "Fiqh": {
    points: ["Definition of Fiqh", "Types of rulings", "Schools of thought"],
    notes: "Fiqh deals with understanding Islamic rulings based on Qur’an and Hadith...",
    audio: "../assets/audio/fiqh.mp3",
    pdf: "../assets/pdfs/fiqh.pdf",
    links: ["https://islamqa.org", "https://seekersguidance.org"]
  },
  // Add all 10 subjects similarly...
};

// Helper function to get query param
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const subjectName = getQueryParam("sub");

if (subjectName && subjectData[subjectName]) {
  document.getElementById("subjectTitle").textContent = subjectName;

  const data = subjectData[subjectName];

  // Points
  const pointsList = document.getElementById("pointsList");
  data.points.forEach(point => {
    const li = document.createElement("li");
    li.textContent = point;
    pointsList.appendChild(li);
  });

  // Notes
  document.getElementById("classNotes").textContent = data.notes;

  // Audio
  document.getElementById("classAudio").src = data.audio;

  // PDF
  document.getElementById("pdfViewer").src = data.pdf;

  // More links
  const linksList = document.getElementById("moreLinks");
  data.links.forEach(link => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
    linksList.appendChild(li);
  });
} else {
  document.querySelector("main").innerHTML = `<p style="text-align:center;">Subject not found or no content available.</p>`;
}
