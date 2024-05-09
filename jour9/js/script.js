$(function(){
  const listUtilisateur = [];
  $("#identifierBtn").on("click",()=>{

    // On recupère les informations (email et password) saisie par l'utilisateur
    const email = $("#connex-email").val();
    const password = $("#connex-password").val();

    // On va recupérer la liste des utilsateurs dans le localStorage en utilisant le key: 'Users'
    // cela nous retourne un tableau
    const users = JSON.parse(localStorage.getItem("Users"));

    // on va chercher dans le tableau 'users' l'utilisateur qui a le meme email et password saisi plus haut
    // ici on utilise la methode "find" de javascript. Elle s'utilise sur les tableaux
    const searchUser =  users.find((user) => user.email === email && user.password === password);

    //on va verifier le contenu de la variable searchUser
    // si rien n'a été trouvé, searchUser sera null ou undefined, cela signifie qu'aucun utilisateur avec l'email
    // et mot de passe saisi n'a été trouvé. Dans ce cas, on affiche un message d'erreur dans notre balise p
    // si la variable searchUser contient quelque chose, cela signifie quu'on a trouvé un utilisateur donc on peut 
    // dire que l'email er le mot de passe sont correte donc on va dire que l'utilisateur est connecté.
    if (searchUser) {
      window.location.href = `../jour9/reservation.html?email=${encodeURIComponent(searchUser.email)}`;
    } else {
      const pSelect = $("#error-connexion");
      pSelect.text("E-mail ou mot de passe incorrect, veuillez créer un compte si vous en n'avez pas");
      pSelect.addClass("p-error");
    } 
  })
});


// function stockAll(){
//   localStorage.setItem("name",document.getElementById("name").value)
//   localStorage.setItem("surname",document.getElementById("surname").value)
//   localStorage.setItem("mail",document.getElementById("mail").value)
// }

// veriffication du nom de domaine

// $(function(){
//   const veriffication = $("#mail");
//   $("#inscrireBtn").on("click",()=>{
    
//   })
// });