$(function (){
  const params = new URLSearchParams(window.location.search);
  const email = params.get('email');

  const users =  JSON.parse(localStorage.getItem("Users"));
  const currentUser =  users.find(user => user.email === email); 
  $("#currentUserName").text(`Bonjour ${currentUser.name} ${currentUser.surname}`)


  $("#reserverBtn").on("click", () => {
  const reservationDay = $("#reservationDay").val();
  const reservationData = {
    date : reservationDay,
    userEmail : email
  };
  saveReservationDay(reservationData);
  $("#reservationDay").val("");
  });

});

const saveReservationDay = (newReservation) => {
  let reservations = [newReservation];
   if ("Reservation" in localStorage) {
      const arrayFromLocalStorage =  JSON.parse(localStorage.getItem("Reservation"));
      reservations  = [...reservations, ...arrayFromLocalStorage];
   } 
  localStorage.setItem("Reservation", JSON.stringify(reservations));
};