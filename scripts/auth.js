document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`Logged in as ${email}`);
    // Add actual login logic here (e.g., API call)
});

document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`Registered ${username} with email ${email}`);
    // Add actual registration logic here (e.g., API call)
});