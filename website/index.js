// Listening for the event when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    alert('DOM Loaded!');
    // Getting a reference of the button using document.getElementById(...)
    const createSessionButton = document.getElementById('create-session-button');

    // Adding an event listener on createSessionButton for the "Click" event
    createSessionButton.addEventListener('click', function () {
        // This callback function is executed when the event is fired
        alert('Button pressed!');
        fetch('http://localhost:8000', { method: 'POST' });
    });
});
