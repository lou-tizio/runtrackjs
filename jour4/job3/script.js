document.getElementById("filtrer").addEventListener("click", filtrerDonnees);

function filtrerDonnees() {
  const id = document.getElementById("id").value;
  const nom = document.getElementById("nom").value;
  const type = document.getElementById("type").value;

  fetch("donnees.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Erreur de récupération du fichier.");
      }
      return response.json();
    })
    .then(data => {
      const resultatFiltre = data.filter(element => {
        return (!id || element.id === id) &&
               (!nom || element.nom.includes(nom)) &&
               (!type || element.type === type);
      });

      afficherResultat(resultatFiltre);
    })
    .catch(error => {
      console.error("Erreur:", error);
    });
}

function afficherResultat(resultat) {
  const resultatDiv = document.getElementById("resultat");
  resultatDiv.innerHTML = "";

  if (resultat.length === 0) {
    resultatDiv.textContent = "Aucun résultat trouvé.";
  } else {
    resultat.forEach(element => {
      const elementDiv = document.createElement("div");
      elementDiv.textContent = `ID : ${element.id}, Nom : ${element.nom}, Type : ${element.type}`;
      resultatDiv.appendChild(elementDiv);
    });
  }
}
