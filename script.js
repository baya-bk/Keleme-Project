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


document.getElementById('fetchBooksBtn').addEventListener('click', function() {
    // Get the book type (academic, story, religious, etc.) from the clicked button
    var bookType = this.getAttribute('data-book-type');

    // Select all book cards
    var bookCards = document.querySelectorAll('.arrivals_card');

    // Loop through each book card
    bookCards.forEach(function(card) {
        // Get the book type of the current card
        var cardType = card.getAttribute('data-book-type');

        // Toggle the visibility of the card based on its type
        card.style.display = (cardType === bookType || bookType === 'all') ? 'block' : 'none';
    });
});
  

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


        // Change background color dynamically
        const colors = ['#ffcccb', '#add8e6', '#ffd700', '#ff69b4', '#98fb98'];
        let currentIndex = 0;

        function changeBackgroundColor() {
            document.body.style.backgroundColor = colors[currentIndex];
            currentIndex = (currentIndex + 1) % colors.length;
        }

        // Change background color every 5 seconds
        setInterval(changeBackgroundColor, 5000);



    