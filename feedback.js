const form = document.getElementById("feedbackForm");
const responseMsg = document.getElementById("responseMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbzZYBWdfcf72R7tqKoes4lv2x4rRKkM5EeI16-aWccpXTpeDHSgSOoEJHaQ9RExlfvRkQ/exec", {
    method: "POST",
    body: formData,
  })
    .then(() => {
      responseMsg.textContent = "✅ Feedback submitted successfully!";
      form.reset();
    })
    .catch(() => {
      responseMsg.textContent = "❌ Error submitting feedback. Try again.";
    });
});
