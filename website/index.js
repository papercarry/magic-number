document.getElementById("create-session-button").addEventListener("click", onClickFunction);

document.addEventListener('DOMContentLoaded', DOMContentLoaded);

function onClickFunction() {
    alert("Clicked");
    fetch('http://localhost:8000/website/index.html',{method:'POST'});
}

function DOMContentLoaded() {
    alert("DOM Loaded");
    var createSessionButton = document.getElementById("create-session-button")

}
