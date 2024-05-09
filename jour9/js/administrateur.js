$(function(){
  let users =  JSON.parse(localStorage.getItem("Users"));
  let reservations = JSON.parse(localStorage.getItem("Reservation"));
  
  users = users.map(user =>{
    user.reservations = reservations.filter(reservation => reservation.userEmail === user.email);
    return user;
  });
  console.log(users);
  $.each(users, function(index, user){
    if (user.reservations.length === 0) {
      return;
    }
    $.each(user.reservations, function(index, reservation) {
      let tableRow = '';
      if (reservation.accepte === 'Yes') {
        tableRow = '<tr><td><span class="badge bg-success">Accepté</span>'+
        '</td>'+
        '<td>'+user.name+'</td><td>'+user.surname+'</td><td>'+reservation.date+'</td>'+
        '<td id="actionButton">'+
        '</td></tr>';
      }
      else if (reservation.accepte === 'No') {
        tableRow = '<tr><td>'+
        '<span class="badge bg-danger">Refusé</span></td>'+
        '<td>'+user.name+'</td><td>'+user.surname+'</td><td>'+reservation.date+'</td>'+
        '<td id="actionButton">'+
        '</td></tr>';
      } else {
        tableRow = '<tr><td></td>'+
        '<td>'+user.name+'</td><td>'+user.surname+'</td><td>'+reservation.date+'</td>'+
        '<td id="actionButton">'+
         '<button type="button" onclick="accepte(\''+user.email+'\',\''+reservation.date+'\')" class="btn-accept btn btn-success ml-3">Accepter</button>'+
         '<button type="button" onclick="refuser(\''+user.email+'\',\''+reservation.date+'\')" class="btn btn-danger">Refuser</button>'+
        '</td></tr>';
      }
   
      $('#tr-containers').append(tableRow);
    });
  });
  
});


function accepte(email, dateReservation){
  let reservations = JSON.parse(localStorage.getItem("Reservation"));
  reservations.forEach((reservation) => {
    if (reservation.date === dateReservation && reservation.userEmail === email){
       reservation.accepte = 'Yes';
    }
  });
  saveReservations(reservations);
  location.reload();
}


function refuser(email, dateReservation){
  let reservations = JSON.parse(localStorage.getItem("Reservation"));
  reservations.forEach((reservation) => {
    if (reservation.date === dateReservation && reservation.userEmail === email){
       reservation.accepte = 'No';
    }
  });
  saveReservations(reservations);
  location.reload();
}

const saveReservations= (newReservation) => {
  localStorage.setItem("Reservation", JSON.stringify(newReservation));
};

