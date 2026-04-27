console.log('Sutrisno Project Initialized');
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    var heading = document.querySelector('h1');
    if (heading) {
        heading.style.color = '#3498db';
    }
});
function displayMessage(message) {
    console.log('Message: ' + message);
    alert(message);
}