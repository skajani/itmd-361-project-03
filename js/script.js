document.addEventListener('DOMContentLoaded', function() {
    // Select all arrow elements
    var arrows = document.querySelectorAll('.arrow');

    // Add click event listener to each arrow
    arrows.forEach(function(arrow) {
        arrow.addEventListener('click', function() {
            // Find the parent section element
            var parentSection = this.closest('section');
            if (parentSection) {
                // Find the .quotes element within the parent section
                var quotes = parentSection.querySelector('.quotes');
                if (quotes) {
                    // Toggle visibility of quotes
                    quotes.classList.toggle('show');
                }
            }
        });
    });
});
