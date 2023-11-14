var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn');
var modal = document.getElementById('login-form');

function register() {
    x.style.left = '-400px';
    y.style.left = '50px';
    z.style.left = '110px';
}

function login() {
    x.style.left = '50%';
    x.style.transform = 'translateX(-50%)';
    y.style.left = '450px';
    z.style.left = '0px';
    modal.style.top = '50px'; // Adjust the top position as needed
}

// Close the login form if clicked outside of it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
