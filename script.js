let subjects = JSON.parse(localStorage.getItem("subjects")) || [];

function addSubject() {
    let name = document.getElementById("subject_name").value.trim();
    let grade = document.getElementById("grade").value;
    let credits = Number(document.getElementById("credits").value);
    let message = document.getElementById("message");

    if (name === "" || grade === "" || credits < 1 || credits > 10 || credits % 1 !== 0) {
        message.innerText = "Enter a subject, choose a grade and enter 1 to 10 whole credits.";
        message.style.color = "#b42318";
        return;
    }

    subjects.push({ name: name, grade: grade, credits: credits });

    localStorage.setItem("subjects", JSON.stringify(subjects));

    document.getElementById("subject_name").value = "";
    document.getElementById("grade").value = "";
    document.getElementById("credits").value = "";

    message.innerText = "Subject added successfully.";
    message.style.color = "#0874d1";

    showSubjects();
    calculateCGPA();
}

function showSubjects() {
    let list = document.getElementById("subject_list");
    list.innerHTML = "";

    if (subjects.length === 0) {
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        cell.colSpan = 5;
        cell.innerText = "Your subjects will appear here.";
        row.appendChild(cell);
        list.appendChild(row);
        return;
    }

    for (let i = 0; i < subjects.length; i++) {
        let row = document.createElement("tr");

        let nameCell = document.createElement("td");
        nameCell.innerText = subjects[i].name;
        row.appendChild(nameCell);

        let gradeCell = document.createElement("td");
        gradeCell.innerText = getGradeName(subjects[i].grade);
        row.appendChild(gradeCell);

        let creditsCell = document.createElement("td");
        creditsCell.innerText = subjects[i].credits;
        row.appendChild(creditsCell);

        let pointsCell = document.createElement("td");
        pointsCell.innerText = Number(subjects[i].grade) * subjects[i].credits;
        row.appendChild(pointsCell);

        let actionCell = document.createElement("td");
        let button = document.createElement("button");
        button.innerText = "DELETE";
        button.className = "delete_button";
        button.onclick = function () {
            deleteSubject(i);
        };
        actionCell.appendChild(button);
        row.appendChild(actionCell);

        list.appendChild(row);
    }
}

function getGradeName(point) {
    let grades = { 10: "O", 9: "A+", 8: "A", 7: "B+", 6: "B", 5: "C", 0: "F" };
    return grades[point] || "F";
}

function deleteSubject(index) {
    subjects.splice(index, 1);
    localStorage.setItem("subjects", JSON.stringify(subjects));
    showSubjects();
    calculateCGPA();
}

function calculateCGPA() {
    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < subjects.length; i++) {
        totalPoints = totalPoints + Number(subjects[i].grade) * subjects[i].credits;
        totalCredits = totalCredits + subjects[i].credits;
    }

    let cgpa = 0;
    if (totalCredits > 0) {
        cgpa = totalPoints / totalCredits;
    }

    document.getElementById("cgpa").innerText = cgpa.toFixed(2);
    document.getElementById("total_credits").innerText = totalCredits;
}

showSubjects();
calculateCGPA();
