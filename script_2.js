
const signUpBtn = document.querySelector('.btn');

signUpBtn.addEventListener('click', () => {
  const firstName = document.getElementById('firstname').value.trim();
  const lastName = document.getElementById('lastname').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('firstpassword').value;
  const confirmPassword = document.getElementById('secondpassword').value;
  
  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    alert('Fill in all fields');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match! Try again');
    return;
  }

  alert('Welcome '+firstName+'. Your account has been created');
  
});
  