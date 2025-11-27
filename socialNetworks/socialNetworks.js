document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("social-networks-container");
  if (!container) return;

  fetch("socialNetworks/socialNetworks.html")
    .then((r) => r.text())
    .then((html) => {
      container.innerHTML = html;
    })
    .catch((err) => {
      console.error("Failed to load socialNetworks component:", err);
    });
});
