
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


// books filtering js

document.addEventListener('DOMContentLoaded', function () {
    // Select all book cards
    var bookCards = document.querySelectorAll('.featured_book_card');

    // Loop through each book card
    bookCards.forEach(function (card) {
        // Display all books initially
        card.style.display = 'block';
    });

    // Add click event listener to each button
    var fetchButtons = document.querySelectorAll('.fetch_books_btn');
    fetchButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Get the book type (academic, story, religious, etc.) from the clicked button
            var bookType = this.getAttribute('data-book-type');

            // Loop through each book card
            bookCards.forEach(function (card) {
                // Get the book type of the current card
                var cardType = card.getAttribute('data-book-type');

                // Toggle the visibility of the card based on its type
                if (bookType === 'all' || cardType === bookType) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});


// 


        // Change background color dynamically
        const colors = ['#98fb98','#ff69b4','#ffcccb', '#add8e6', '#ffd700'];
        let currentIndex = 0;

        function changeBackgroundColor() {
            document.body.style.backgroundColor = colors[currentIndex];
            currentIndex = (currentIndex + 1) % colors.length;
        }

        // Change background color every 5 seconds
        setInterval(changeBackgroundColor, 5000);



    