function validateForm() {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirmPassword').value;
  let email = document.getElementById('email').value;

  let usernamePattern = /^[A-Za-z]{3,20}$/;
  let passwordPattern = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,16}/ ;
  let emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  let isValid = true;

  
  if (!usernamePattern.test(username)) {
    document.getElementById('usernameError').innerHTML= 'Invalid username (3-20 characters, letters only)';
    isValid = false;
  } else {
    document.getElementById('usernameError').innerHTML = '';
  }


  if (!passwordPattern.test(password)) {
    document.getElementById('passwordError').innerHTML = 'Invalid password (8-16 characters)';
    isValid = false;
  } else {
    document.getElementById('passwordError').innerHTML = '';
  }

  
  if (password !== confirmPassword) {
    document.getElementById('confirmPasswordError').innerHTML = 'Passwords do not match';
    isValid = false;
  } else {
    document.getElementById('confirmPasswordError').innerHTML = '';
  }


  if (!emailPattern.test(email)) {
    document.getElementById('emailError').innerHTML = 'Invalid email';
    isValid = false;
  } else {
    document.getElementById('emailError').innerHTML = '';
  }

  return isValid;
}