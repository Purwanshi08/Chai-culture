document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const emailInput = this.querySelector("input");
  const emailValue = emailInput.value;

  alert(`Thank you! A royal invitation will be sent to: ${emailValue}`);
  
  this.reset();
});