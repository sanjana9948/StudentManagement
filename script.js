
function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    if (name == "" || roll == "") {
        alert("Enter all details");
        return;
    }

    let row = "<tr><td>" + name +
        "</td><td>" + roll + "</td></tr>";
        "</td><td>" + roll + "</td></tr>";

    document.getElementById("data").innerHTML += row;

    alert("Student Registered Successfully");
}

function searchStudent() {
    let value = document.getElementById("search").value;
    let rows = document.getElementById("data").rows;

    for (let i = 0; i < rows.length; i++) {
        if (rows[i].cells[1].innerHTML == value) {
            alert("Student Found: " +
                rows[i].cells[0].innerHTML);
            return;
        }
    }

    alert("Student Not Found");
}
