// Example: Adding a click event listener to the "Apply Now" button

const applyButton = document.querySelector('.apply-button');

if (applyButton) {
    applyButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        alert('Apply Now button clicked!'); 
        // Replace with your desired action (e.g., open a form)
    });
}

// Example: Handling search input (basic)

const searchInput = document.querySelector('.search input');

if (searchInput) {
    searchInput.addEventListener('input', function() {
        console.log('Search query:', searchInput.value);
        // You would typically use this value to filter results
    });
}