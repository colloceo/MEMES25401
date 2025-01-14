// Search functionality
document.querySelector('.search-bar button').addEventListener('click', function () {
    const query = document.querySelector('.search-bar input').value;
    if (query) {
        alert(`Searching for: ${query}`);
        // Add actual search logic here (e.g., filter memes)
    } else {
        alert('Please enter a search term.');
    }
});