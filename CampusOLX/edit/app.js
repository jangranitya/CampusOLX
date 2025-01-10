document.getElementById('editProfileForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Simulating profile update
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation (more complex can be done on the backend)
    if (username === '' || email === '') {
        alert('Please fill in all required fields.');
        return;
    }

    // Assume profile update is successful
    document.getElementById('message').textContent = 'Profile updated successfully!';
});
document.querySelector('#darkModeToggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});

