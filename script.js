
// loginform js
// Check if the current page is index.html
if (window.location.pathname.endsWith('/index.html')) {
    var x = document.getElementById('login');
    var y = document.getElementById('register');
    var z = document.getElementById('btn');
    var loginForm = document.getElementById('login-form');
    var descriptionSection = document.querySelector('.description');
    var infoSection = document.querySelector('.info-section');
    var verseSection = document.querySelector('.verse');
    var joinUsSection = document.querySelector('.join-us');
    var footerSection = document.querySelector('.footer');

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

    function showLoginForm() {
        loginForm.style.display = 'block';
        descriptionSection.style.display = 'none';
        infoSection.style.display = 'none';
        verseSection.style.display = 'none';
        joinUsSection.style.display = 'none';
        footerSection.style.display = 'none';
    }

    function hideAllSections() {
        descriptionSection.style.display = 'flex';
        infoSection.style.display = 'flex';
        verseSection.style.display = 'flex';
        joinUsSection.style.display = 'flex';
        footerSection.style.display = 'flex';
        loginForm.style.display = 'none';
    }

    // Execute the hideAllSections function on page load
    hideAllSections();

    // Event listener for the login button
    document.querySelector('.loginbtn').addEventListener('click', function () {
        showLoginForm();
    });

    // Close the login form if clicked outside of it
    window.onclick = function (event) {
        if (event.target == loginForm) {
            hideAllSections();
        }
    };
}

//

//when it is resized the links will be hide
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");
window.onresize = function() {
  if (window.innerWidth > 992) {
    dropDownMenu.classList.remove("open");
    toggleBtnIcon.classList = 'fa-solid fa-bars';
  } else {
    dropDownMenu.classList.remove("open"); // Hide the menu on smaller screens
    toggleBtnIcon.classList = 'fa-solid fa-bars';
  }
};

// Initially hide the dropdown menu
dropDownMenu.classList.remove("open");

// Function to toggle the dropdown menu
function toggleDropdownMenu() {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars';
}

// Click event handler for the bar icon
toggleBtn.onclick = function() {
  toggleDropdownMenu();
};


// Close the dropdown menu when clicking outside of it
document.addEventListener('click', function(event) {
  if (!dropDownMenu.contains(event.target) && !toggleBtn.contains(event.target)) {
    dropDownMenu.classList.remove('open');
    toggleBtnIcon.classList = 'fa-solid fa-bars';
  }
});




    