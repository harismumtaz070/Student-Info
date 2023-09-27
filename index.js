let serialNumber = 1; // Initialize the serial number
let totalScore = 0; // Initialize the total score

function addStudent() {
    let name = document.getElementById("name").value;
    let fname = document.getElementById("f_name").value;
    let score = parseFloat(document.getElementById("score").value);


    let table = document.querySelector("table");
    let newRow = table.insertRow(-1);

    let serialNumberCell = newRow.insertCell(0);
    let nameCell = newRow.insertCell(1);
    let fatherCell = newRow.insertCell(2);
    let scoreCell = newRow.insertCell(3);
    let totalScoreCell = newRow.insertCell(4);

    serialNumberCell.textContent = serialNumber; // Set the serial number
    nameCell.textContent = name;
    fatherCell.textContent = fname;
    scoreCell.textContent = score;

    totalScore += score; // Update the total score
    totalScoreCell.textContent = totalScore; // Display the total score

    serialNumber++; // Increment the serial number

    // Clear the input fields after adding a student
    document.getElementById("name").value = "";
    document.getElementById("f_name").value = "";
    document.getElementById("score").value = "";
}