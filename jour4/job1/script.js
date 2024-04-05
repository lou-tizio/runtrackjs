document.getElementById("button").addEventListener("click", recupererExpressionFavorite);

function recupererExpressionFavorite() {
  fetch("expression.txt")
    .then(response => {
      if (!response.ok) {
        throw new Error("Erreur de récupération du fichier.");
      }
      return response.text();
    })
    .then(data => {
      const paragraphe = document.getElementById("expression");
      paragraphe.textContent = data;
    })
    .catch(error => {
      console.error("Erreur:", error);
    });
}
