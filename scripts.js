document.addEventListener("DOMContentLoaded", function() {
    loadHTML('header.html', 'header-container');
    loadHTML('vegetables.html', 'vegetable-list-container');
});

function loadHTML(file, containerId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => console.error('Error loading the file:', error));
}
