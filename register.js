document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');
  const errorDiv = document.getElementById('error-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = sanitizeInput(document.getElementById('username').value.trim());
    const email = sanitizeInput(document.getElementById('email').value.trim());
    const password = sanitizeInput(document.getElementById('password').value.trim());

    const allowedDomains = ['gmail.com', 'mail.ru', 'yandex.ru', 'outlook.com', 'bk.ru'];
    const emailParts = email.split('@');
    const emailDomain = emailParts[1];

    if (!email.includes('@') || !emailDomain || !allowedDomains.includes(emailDomain)) {
      showError('Введите корректный Email с доменом gmail.com, mail.ru и т.д.');
      return;
    }

    if (username.length < 3) {
      showError('Логин должен содержать минимум 3 символа.');
      return;
    }

  
    const minLength = 7;
    const upperCaseRegex = /[A-ZА-Я]/; // Поддержка русских заглавных типа
    const specialCharRegex = /[!\"№;%?*()]/;

    if (password.length < minLength) {
      showError(`Пароль должен быть не менее ${minLength} символов.`);
      return;
    }

    if (!upperCaseRegex.test(password)) {
      showError('Пароль должен содержать минимум одну заглавную букву.');
      return;
    }

    if (!specialCharRegex.test(password)) {
      showError('Пароль должен содержать хотя бы один специальный символ: ! " № ; % ? * ( )');
      return;
    }

    
    const user = {
      username,
      email,
      password 
    };
    localStorage.setItem('registeredUser', JSON.stringify(user));

    errorDiv.textContent = '';
    window.location.href = 'login.html';
  });

  function sanitizeInput(str) {
    return str.replace(/[<>&"'`]/g, '');
  }

  function showError(msg) {
    errorDiv.textContent = msg;
  }
});
