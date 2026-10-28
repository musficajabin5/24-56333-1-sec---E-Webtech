
let name = prompt("Enter student name:");
let age = Number(prompt("Enter student age:"));
let cgpa = Number(prompt("Enter CGPA:"));
let status = prompt("Enter student status:");
let grade = prompt("Enter student grade:");

let output = document.getElementById("output");

// Display student information
output.innerHTML += "<h2>Student Information</h2>";
output.innerHTML += "Name: " + name + "<br>";
output.innerHTML += "Age: " + age + "<br>";
output.innerHTML += "CGPA: " + cgpa + "<br>";
output.innerHTML += "Status: " + status + "<br>";
output.innerHTML += "Grade: " + grade + "<br>";

// Course array
let courses = ["Web Technology", "OOP", "Database"];

output.innerHTML += "<h2>Course List</h2>";

for (let i = 0; i < courses.length; i++) {
    output.innerHTML += courses[i] + "<br>";
}

// Marks and grade
let marks = Number(prompt("Enter marks:"));

if (marks === 80) {
    output.innerHTML += "<h2>Marks Grade: A+</h2>";
} else if (marks === 70) {
    output.innerHTML += "<h2>Marks Grade: A</h2>";
} else if (marks === 60) {
    output.innerHTML += "<h2>Marks Grade: B</h2>";
} else {
    output.innerHTML += "<h2>Marks Grade: F</h2>";
}

// Function
function showStudent(name, age) {
    output.innerHTML += "<h2>Show Student</h2>";
    output.innerHTML += "Name: " + name + "<br>";
    output.innerHTML += "Age: " + age + "<br>";
}

showStudent(name, age);

// Three student names
let students = [];

for (let i = 0; i < 3; i++) {
    students[i] = prompt("Enter student " + (i + 1) + " name:");
}

output.innerHTML += "<h2>Three Student Names</h2>";

for (let i = 0; i < students.length; i++) {
    output.innerHTML += students[i] + "<br>";
}
