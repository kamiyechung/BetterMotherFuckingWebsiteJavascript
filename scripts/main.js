// Afficher la popup après 10s
window.setTimeout(popup, 10000);

function popup() {
  var choice;
  if (confirm("Est-ce que tu veux visiter un site trop trop bien ?")) {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  } else {
  window.close();
  }
}
