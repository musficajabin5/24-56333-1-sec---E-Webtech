
let studentName = localStorage.getItem("studentName");
let savedEvents = localStorage.getItem("events");
let events = savedEvents ? JSON.parse(savedEvents) : [];
let summary = document.getElementById("summary");
if (studentName === null || events.length === 0) {

    summary.innerHTML = "Registration information not found.";

} else {
    summary.innerHTML = "Name: " + studentName + "<br><br>";

    summary.innerHTML += "Events:<br>";
    let totalFee = 0;
    for (let i = 0; i < events.length; i++) {

        summary.innerHTML += events[i] + "<br>";

        totalFee += 150;
    }
    summary.innerHTML += "<br>Total Fee: " + totalFee + " Taka";
}
function goBack() {
    window.location.href = "index.html";
}
