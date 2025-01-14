document.getElementById('upload-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('meme-title').value;
    const description = document.getElementById('meme-description').value;
    const image = document.getElementById('meme-image').files[0];
    alert(`Meme "${title}" uploaded successfully!`);
    // Add actual upload logic here (e.g., API call)
});