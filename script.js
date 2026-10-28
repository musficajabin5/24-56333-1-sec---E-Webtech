let events = [];

function addEvent() {

    let eventName = document.getElementById("event").value.trim();

    // Check whether the event name is empty
    if (eventName === "") {
        alert("Please enter an event name.");
        return;
    }

    // Check the maximum number of events
    if (events.length >= 3) {
        alert("You can join a maximum of 3 events.");
        return;
    }

    // Add the event to the array
    events.push(eventName);

    // Clear the input box
    document.getElementById("event").value = "";

    // Display the selected events
    let eventList = document.getElementById("eventList");

    eventList.innerHTML = "";

    for (let i = 0; i < events.length; i++) {
        let li = document.createElement("li");

        li.textContent = events[i];

        eventList.appendChild(li);
    }

    alert("Event Added");
}


function confirmRegistration() {

    let studentName = document.getElementById("studentName").value.trim();

    // Check whether the student name is empty
    if (studentName === "") {
        alert("Please enter your name.");
        return;
    }

    // Check whether any event has been added
    if (events.length === 0) {
        alert("Please add at least one event.");
        return;
    }

    // Save the student name
    localStorage.setItem("studentName", studentName);

    // Save the events array as a JSON string
    localStorage.setItem("events", JSON.stringify(events));

    // Open the confirmation page
    window.location.href = "confirm.html";
}