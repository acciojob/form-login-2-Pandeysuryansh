//your JS code here. If required.
document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.querySelector('input[name="First Name"]').value;
  const lastName = document.querySelector('input[name="Last Name"]').value;
  const phone = document.querySelector('input[name="Phone Number"]').value;
  const email = document.querySelector('input[name="Email ID"]').value;

  alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phone} Email ID: ${email}`);
});