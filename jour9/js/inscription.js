$(function(){
   $("#inscrireBtn").on("click", () =>{ 

    // ici on va recuppérer les valeur des différent champs input en nous servant de leur id
     const userName = $("#name").val();
     const userSurname = $("#surname").val();
     const userMail = $("#mail").val();
     const userPassword = $("#password").val();

     // on va creer un objet utilisateur
     const user = {
        name:  userName,
        surname : userSurname,
        email : userMail,
        password : userPassword
     };

     // avant de sauvegarder dans le localstorage, on va convertir notre tableau d'objet utilisateur en string
     // pour faire ça, on utilise JSON.stringify
     // on souvegarde un tableau car cela va nous faciliter les choses. Comme c'est un tableu, on pourra y ajouter
     // des utilisateur à chaque inscription
     saveUserData(user);
     window.location.href = `../jour9/reservation.html?email=${encodeURIComponent(user.email)}`;
   });
});

const saveUserData = (newUser) => {
   let users = [newUser];
    if ("Users" in localStorage) {
       const arrayFromLocalStorage =  JSON.parse(localStorage.getItem("Users"));
       users = [...users, ...arrayFromLocalStorage];
    } 
   localStorage.setItem("Users", JSON.stringify(users));
};

