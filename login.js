document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const errorDiv = document.getElementById('login-error');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const enteredUsername = document.getElementById('username').value.trim();
    const enteredPassword = document.getElementById('password').value.trim();

    const savedUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (
      savedUser &&
      enteredUsername === savedUser.username &&
      enteredPassword === savedUser.password
    ) {
      window.location.href = 'index.html'; 
    } else {
      errorDiv.textContent = 'Неверный логин или пароль!';
    }
  });
});
