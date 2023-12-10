
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
