document.getElementById("create-session-button").addEventListener("click", onClickSessionFunction);

document.addEventListener('DOMContentLoaded', DOMContentLoaded);

document.getElementById("guess").addEventListener("click", onClickGuessFunction)

function onClickSessionFunction() {
    //alert("Clicked");
    fetch('http://localhost:8000/', { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            document.getElementById("sessid").textContent = data.session_id
        })
}

function onClickGuessFunction() {
    alert("guess clicked")
    var sessionIdInput = document.getElementById("sessSel").value;
    var attemptInput = document.getElementById("attempt").value;
    console.log(attemptInput)

    const url = `http://localhost:8000/${sessionIdInput}?attempt=${attemptInput}`

    fetch(url, { method: 'PUT'})
}

function DOMContentLoaded() {
    alert("DOM Loaded");
    const createSessionButton = document.getElementById('create-session-button');
}
