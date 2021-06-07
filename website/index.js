// Listening for the event when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    alert('DOM Loaded!');
    // Getting a reference of the button using document.getElementById(...)
    const createSessionButton = document.getElementById('create-session-button');

    // Adding an event listener on createSessionButton for the "Click" event
    createSessionButton.addEventListener('click', function () {
        // This callback function is executed when the event is fired
        alert('Button pressed!');
        fetch('http://localhost:8000', { method: 'POST' })
            // first .then, receive the response
            .then(function (response) {
                // Treat the body as json and convert it into JavaScript Object
                return response.json();
            })
            // second .then, where we can access the JavaScript Object
            .then(function (json) {
                // extract the session Id from response body
                const sessionId = json.session_id;

                // Get reference to the element that will display the session id
                const sessionIdField = document.getElementById('session-id-field');

                // Set the innerHTML to the session id
                sessionIdField.innerHTML = sessionId;
            });
    });

    // Get a reference of the guess button
    const guessButton = document.getElementById('guess-button');

    // Add a event listener for the click event
    guessButton.addEventListener('click', function () {
        // When the button is click, we want to alert
        alert('Guess Button clicked!');

        // Get reference to the 2 input field
        const sessionIdInput = document.getElementById('session-id-input');
        const attemptInput = document.getElementById('attempt-input');

        // Check attemptInput validity
        if (!attemptInput.reportValidity()) {
            return;
        }

        // Extract the value of the 2 input field and put into variables
        const sessionId = sessionIdInput.value;
        const attempt = attemptInput.value;

        // Create the url
        const url = `http://localhost:8000/${sessionId}?attempt=${attempt}`;

        // Send HTTP Request
        fetch(url, { method: 'PUT' })
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                // Extract the lower and upper bound
                const lowerBound = json[0];
                const upperBound = json[1];

                // Get the reference to the label element
                const lowerBoundLabel = document.getElementById('lower-bound-label');
                const upperBoundLabel = document.getElementById('upper-bound-label');

                // Update the label
                lowerBoundLabel.innerHTML = lowerBound;
                upperBoundLabel.innerHTML = upperBound;

                // Update input bound
                attemptInput.setAttribute('min', lowerBound + 1);
                attemptInput.setAttribute('max', upperBound - 1);
            });
    });
});
