document.getElementById("button").addEventListener("click", recupererExpressionFavorite);

function recupererExpressionFavorite() {
  fetch("expression.txt")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur de récupération du fichier.");
      }
      return response.text();
    })
    .then((contenu)=> {
      const paragraphe = document.createElement('p')
      paragraphe.textContent = contenu;
      document.body.appendChild(paragraphe);
    })
    .catch((error) => {
      console.error("Erreur:", error);
    });
}
