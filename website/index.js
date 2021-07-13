document.getElementById("create-session-button").addEventListener("click", onClickFunction);

document.addEventListener('DOMContentLoaded', DOMContentLoaded);

function onClickFunction() {
    //alert("Clicked");
    fetch('http://localhost:8000/', { method: 'POST' })
        .then(response => response.json())
        .then(data=> {
            document.getElementById("sessid").textContent += data.session_id
        })
}

function DOMContentLoaded() {
    alert("DOM Loaded");
    var createSessionButton = document.getElementById("create-session-button")

}
