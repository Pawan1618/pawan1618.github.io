
var students = [
    {
        name: 'Pawan',
        rollNumber: 68,
        math: 95,
        eng: 92,
        hindi: 87,
        sci: 90,
    },
    {
        name: 'Ranga',
        rollNumber: 69,
        math: 93,
        eng: 98,
        hindi: 89,
        sci: 95,
    },
    {
        name: 'Srinivas',
        rollNumber: 70,
        math: 90,
        eng: 88,
        hindi: 80,
        sci: 79,
    },
    {
      name: 'Akhil',
      rollNumber: 112,
      math: 81,
      eng: 99,
      hindi: 98,
      sci: 80,
  },
  {
    name: 'Asmita',
    rollNumber: 124,
    math: 98,
    eng: 98,
    hindi: 99,
    sci: 99,
},
{
  name: 'Vikas',
  rollNumber: 281,
  math: 86,
  eng: 78,
  hindi: 85,
  sci: 89,
},
{
  name: 'Dinesh',
  rollNumber: 145,
  math: 70,
  eng: 72,
  hindi: 90,
  sci: 75,
},
{
  name: 'Amal',
  rollNumber: 133,
  math: 81,
  eng: 88,
  hindi: 80,
  sci: 79,
},
{
  name: 'Priya',
  rollNumber: 294,
  math: 92,
  eng: 88,
  hindi: 71,
  sci: 80,
},
{
  name: 'Alex',
  rollNumber: 186,
  math: 68,
  eng: 73,
  hindi: 84,
  sci: 77,
},
{
  name: 'Steve',
  rollNumber: 152,
  math: 94,
  eng: 75,
  hindi: 61,
  sci: 91,
},
{
  name: 'Akash',
  rollNumber: 161,
  math: 90,
  eng: 88,
  hindi: 80,
  sci: 79,
},
{
  name: 'Pranavi',
  rollNumber: 178,
  math: 93,
  eng: 88,
  hindi: 71,
  sci: 91,
}
]
var main = document.getElementById('main')
var searched = document.getElementById("search")
function add() {
    for (var i = 0; i < students.length; i++) {
        main.innerHTML += `
<tr>
<td>${[i + 1]}</td>
<td>${students[i].name}</td>
<td>${students[i].rollNumber}</td>
<td>${students[i].math}</td>
<td>${students[i].eng}</td>
<td>${students[i].hindi}</td>
<td>${students[i].sci}</td>
<td>${students[i].math + students[i].eng + students[i].hindi + students[i].sci}</td>
<td>${((students[i].math + students[i].eng + students[i].hindi + students[i].sci ) * 100 / 400).toFixed(2)}%</td>
<td><input type="button" value="Delete" class="delBtn" onclick="deleteRow(this)"></td>
<tr>
`};
}
add();
function search() {
    var found = false;
    for (i = 0; i < students.length; i++) {
        if (searched.value.toLowerCase() == students[i].name.toLowerCase()) {
            found = true;
            Swal.fire({
                // title: `Student Found!`,
                title: `Name: ${students[i].name}`,
                text: ` Maths: ${students[i].math} | English: ${students[i].eng} | Hindi: ${students[i].hindi} | Science ${students[i].sci}} | Total: ${students[i].math + students[i].eng + students[i].hindi + students[i].sci} | Percentage: ${((students[i].math + students[i].eng + students[i].hindi + students[i].sci) * 100 / 400).toFixed(2)}%`,
                icon: 'success',
                confirmButtonText: 'Done'
            });
            searched.value = ""
        }
    }            
    if (found === false) {
        Swal.fire({
            icon: 'error',
            title: 'Error Finding Student',
            text: searched.value + ' Is Not In This List',
        })
        searched.value = ""
    }
}
function newStudent() {
    Swal.fire({
      title: 'Enter Student Details',
      html:
      '<input id="swal-input1" class="swal2-input" placeholder="Name">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Roll Number">' +
        '<input id="swal-input3" class="swal2-input" placeholder="Math">' +
        '<input id="swal-input4" class="swal2-input" placeholder="English">' +
        '<input id="swal-input5" class="swal2-input" placeholder="Hindi">' +
        '<input id="swal-input6" class="swal2-input" placeholder="Science">', 
      focusConfirm: false,
      preConfirm: () => {
        const name = document.getElementById('swal-input1').value;
        const rollNumber = document.getElementById('swal-input2').value;
        const math = parseInt(document.getElementById('swal-input3').value);
        const eng = parseInt(document.getElementById('swal-input4').value);
        const hindi = parseInt(document.getElementById('swal-input5').value);
        const sci = parseInt(document.getElementById('swal-input6').value);
  
        if (isNaN(math) || isNaN(eng) || isNaN(hindi) || isNaN(sci)) {
          Swal.fire({
            icon: 'error',
            title: 'Invalid Input',
            text: 'Please enter numeric values for Math, English, Hindi, Science.',
          });
          return false; // Prevent closing the alert
        }
  
        return [name, rollNumber, math, eng, hindi, sci];
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const formValues = result.value;
  
        const student = {
          name: formValues[0],
          rollNumber: parseInt(formValues[1]),
          math: parseInt(formValues[2]),
          eng: parseInt(formValues[3]),
          hindi: parseInt(formValues[4]),
          sci: parseInt(formValues[5]),
        };
  
        students.push(student);
        const index = students.length - 1;
        main.innerHTML += `
          <tr>
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.rollNumber}</td>
            <td>${student.math}</td>
            <td>${student.eng}</td>
            <td>${student.hindi}</td>
            <td>${student.sci}</td>
            <td>${student.math + student.eng + student.hindi + student.sci}</td>
            <td>${((student.math + student.eng + student.hindi + student.sci) * 100 / 400).toFixed(2)}%</td>
            <td><input type="button" class="delBtn" value="Delete" onclick="deleteRow(this)"></td>
          </tr>
        `;
      }
    });
  }

  // Delete Function
function deleteRow(r) {
  if (confirm('Are you sure to delete this record ?')) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("table").deleteRow(i);
}}