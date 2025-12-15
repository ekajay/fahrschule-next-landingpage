// Lead-Formular Handling über Formspree
const form = document.getElementById("leadForm");
const formMessage = document.getElementById("formMessage");
const popup = document.getElementById("successPopup");
const closePopupBtn = document.getElementById("closePopup");

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
      // Formular zurücksetzen
      form.reset();

      // Popup anzeigen
      popup.style.display = "block";

      // Optional: auch die formMessage anzeigen
      formMessage.textContent = "";
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

// Popup schließen
closePopupBtn.addEventListener("click", function () {
  popup.style.display = "none";
});

// Download-Kalkulator (Platzhalter)
document.getElementById("downloadCalc")?.addEventListener("click", function () {
  alert("Der Kalkulator wird bald verfügbar sein.");
});
