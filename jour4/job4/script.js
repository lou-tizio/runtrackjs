document.getElementById("updateButton").addEventListener("click", updateUserTable);

function updateUserTable() {
  fetch("utilisateurs.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Erreur de récupération du fichier JSON.");
      }
      return response.json();
    })
    .then(data => {
      const userTableBody = document.getElementById("userTableBody");
      userTableBody.innerHTML = "";

      data.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${user.id}</td><td>${user.nom}</td><td>${user.prenom}</td><td>${user.email}</td>`;
        userTableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error("Erreur:", error);
    });
}
