document.getElementById("staff").addEventListener("click", staff)

function staff() {
  document.getElementById('sign-in-form').innerHTML=`
  <div id="sign-up-form">
    <div class="staff col-12 form-row">
      <label class="form-text col-sm" for="first-name">First Name</label>
      <input class="form-text col-sm" type="text" name="fname" placeholder="First Name *" id="first-name" required>
      <label class="form-text col-sm" for="last-name">Last Name</label>
      <input class="form-text col-sm" type="text" name="lname" placeholder="Last Name *" id="last-name" required>
    </div>
    <div class="staff col-12 form-row">
      <label class="form-text col-md" for="email-address">Email Address</label>
      <input class="form-text col-md" type="text" name="email" placeholder="Email Address *" id="email-address" required>
      <label class="form-text col-md" for="password">Password</label>
      <input class="form-text col-md" type="text" name="password" placeholder="Password *" id="password" required>
    </div>
    <div class="staff col-12 form-row">
      <button type="reset" class="btn">Clear Form</button>
      <button type="submit" class="btn">Sign In</button>
      <button type="submit" class="btn">Create Account</button>
    </div>
  </div>
  `;
}




let logInForm = document.getElementById("log-in");
let LogIn = document.getElementById("log-in");
let cancel = document.getElementById("cancel")[0];
getElementById("log-in").document.addEventListener = function () {
  staffForm = "staff-form"
}
document.addEventListener = function() {
  staffForm = "none";
}
window.addEventListener = function(event) {
  if (event.target === modal) {
    staffForm = "none"
  }