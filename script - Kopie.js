// Lead-Formular Handling über Formspree
const form = document.getElementById("leadForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", async function (e) {
  e.preventDefault(); // Verhindert das Standard-Submit

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method, // sollte POST sein
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      formMessage.textContent = "Vielen Dank! Ich melde mich zeitnah bei Ihnen.";
      formMessage.style.color = "#398C92";
      form.reset();
    } else {
      const data = await response.json();
      formMessage.textContent = data.errors ? data.errors.map(err => err.message).join(", ") : "Beim Senden ist ein Fehler aufgetreten.";
      formMessage.style.color = "red";
    }
  } catch (error) {
    formMessage.textContent = "Beim Senden ist ein Fehler aufgetreten.";
    formMessage.style.color = "red";
  }
});

// Download-Kalkulator (Platzhalter)
document.getElementById("downloadCalc")?.addEventListener("click", function () {
  alert("Der Kalkulator wird bald verfügbar sein.");
});
