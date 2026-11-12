function bookNow() {
  let name = document.getElementById("guestName").value;
  let room = document.getElementById("roomType").value;
  let date = document.getElementById("checkIn").value;
  if (name == "") {
    alert("Please enter your name");
    return;
  }
  document.getElementById("message").innerText = "Thank you " + name + "! You booked " + room + " on " + date;