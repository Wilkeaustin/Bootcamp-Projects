var selectedRow = null;
function onFormSubmit() {
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null) {
        insertNewAppointment(formData);
    }
    else {
         updateAppointment(formData);
    }
    resetList();
}

function readFormData() {
    var formData = {};
    formData["dog"] = document.getElementById("dog").value;
    formData["owner"] = document.getElementById("owner").value;
    formData["appointment"] = document.getElementById("appointment").value;
    formData["ownerNum"] = document.getElementById("ownerNum").value;
    return formData;
}

function insertNewAppointment(data) {
    var table = document.getElementById("aptList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.dog;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.owner;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.appointment;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.ownerNum;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('dog').value = selectedRow.cells[0].innerHTML;
    document.getElementById('owner').value = selectedRow.cells[1].innerHTML;
    document.getElementById('appointment').value = selectedRow.cells[2].innerHTML;
    document.getElementById('ownerNum').value = selectedRow.cells[3].innerHTML;
}

function updateAppointment(formData){
    selectedRow.cells[0].innerHTML = formData.dog;
    selectedRow.cells[2].innerHTML = formData.owner;
    selectedRow.cells[3].innerHTML = formData.appointment;
    selectedRow.cells[4].innerHTML = formData.ownerNum;
}

function onDelete(td) {
    if(confirm('Are you sure you want to delete this appointment?')){
        row = td.parentElement.parentElement;
        document.getElementById('aptList').deleteRow(row.rowIndex);
    }
    resetList();
}

function resetList(){
    document.getElementById('dog').value = '';
    document.getElementById('owner').value = '';
    document.getElementById('appointment').value = '';
    document.getElementById('ownerNum').value = '';
}


// class Dog {
//     constructor(name) {
//         this.name = name;
//         this.breed = breed;
//         this.appointments = []
//     }

//     addAppointment(name, email, contactInfo, dateTime) {
//         this.appointments.push(new Appointment(name, email, contactInfo, dateTime));
//     }
// }

// class Appointment {
//     constructor(name, email, contactInfo, dateTime) {
//         this.name = name;
//         this.email = email;
//         this.contactInfo = contactInfo;
//         this.dateTime = dateTime;
//     }
// }

// class AppointmentService {
//     static url = 'https://62b53133da3017eabb164675.mockapi.io/appointments/appointments';
    
//     static getAllAppointments() {
//         return $.get(this.url);
//     }

//     static getAppointment(id) {
//         return $.get(this.url + `/${id}`);
//     }

//     static createAppointment(appointment) {
//         return $.post(this.url, appointment);
//     }

//     static updateAppointment(appointment) {
//         return $.ajax({
//             url: this.url + `/${appointment._id}`,
//             dataType: 'json',
//             data: JSON.stringify(appointment),
//             contentType: 'application/json',
//             type: 'PUT'
//         });
//     }

//     static deleteAppointment(id) {
//         return $.ajax({
//             url: this.updateAppointment + `/${id}`,
//             type: 'DELETE'
//         });
//     } 
// }

// class DOMManager {
//     static appointments;

//     static getAllAppointments() {
//         AppointmentService.getAllAppointments().then(appointments => this.render(appointments));
//     }

//     static render(appointments) {
//         this.appointments = appointments;
//         $('#app').empty();
//         for(let appointment of appointments) {
//             $('#app').prepend(
//             `<div id="${appointment._id}" class="card">
//             <div class="card-header">
//                 <h2>${appointment.name}<h2>
//                 </div>
//             </div>
//             `
//             )
//         }
//     }

// }










// var app = new function() {
//     this.el= document.getElementById('apts');
//     this.apts=[];
//     console.log(apts);

//     this.FetchAll = function() {
//         var data = '';

//         if(this.apts.length > 0) {
//             for (i = 0; i < this.apts.length; i++) {
//                 data += '<tr>';
//                 data += '<td>'+(i+1)+". " + this.apts[i] + '</td>';
//                 data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Edit</button></td>';
//                 data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button></td>';
//                 data += '</tr>';
//             }
//         }
//         return this.el.innerHTML = data;
//     };

//     this.Add = function() {
//         el = document.querySelectorAll('#input1, #input2, #input3, #input4, #input5');
//         var apt = el.value;

//         if(apt) {
//             this.apts.push(apt.trim());
//             el.value= '';
//             this.FetchAll();
//         }
//     };

//     this.Edit = function(item) {

//     };

//     this.Delete = function(item) {
//         this.apts.splice(item,1)
//         this.FetchAll();
//     };
// }

// app.FetchAll();

// function CloseInput() {
//     document.getElementById('edit-box').style.display = 'none';
// }
