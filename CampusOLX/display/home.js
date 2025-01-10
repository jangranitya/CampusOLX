// Simulate fetching user data (this would typically come from the backend)
const userProfile = {
    username: 'JohnDoe',
    role: 'admin' // Change to 'user' to test user dashboard
};

// Display username and role
document.getElementById('username').textContent = userProfile.username;
document.getElementById('role').textContent = userProfile.role.charAt(0).toUpperCase() + userProfile.role.slice(1);

// Toggle between user and admin dashboards
if (userProfile.role === 'admin') {
    document.getElementById('adminActions').style.display = 'block';
    document.getElementById('userRole').textContent = 'Admin';
} else {
    document.getElementById('userActions').style.display = 'block';
    document.getElementById('userRole').textContent = 'User';
}

// Redirect to edit profile (for demonstration purposes)
document.getElementById('editProfileButton').addEventListener('click', function() {
    window.location.href = '../edit/index.html'; // Redirect to edit profile page
});
