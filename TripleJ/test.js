var modal = document.getElementById("loginModal");

// Get the button that opens the modal
var btn = document.getElementById("loginBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle the login form submission
document.getElementById("loginForm").onsubmit = function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Perform your login logic here (e.g., make an AJAX request to your server)
  console.log("Username:", username);
  console.log("Password:", password);
  
  // Close the modal after login (optional)
  modal.style.display = "none";
}