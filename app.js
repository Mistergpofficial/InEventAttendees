const  firstName = document.querySelector(".firstName");
const  lastName = document.querySelector(".lastName");
const  username = document.querySelector(".username");
const  email = document.querySelector(".email");
const  telephone = document.querySelector(".telephone");
const  enrollmentDate = document.querySelector(".enrollmentDate");
const  notificationElement = document.querySelector(".notification");
 

const person = {};

    let eventID = 75503;
    let personID = 12909870;

    getperson(eventID,personID);

// SHOW ERROR WHEN THERE IS AN ISSUE
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

// get person from api
function getperson(eventID, personID){
    let api = `https://app.inevent.com/api/?action=event.person.get&eventID=${eventID}&personID=${personID}`;

    console.log(api);
    

    fetch(api,{
        method: 'GET', // or 'PUT'
        headers: {
            'Authorization': 'Bearer $2a$08$OTA3NTc1ODU2NjIyMWNhMOmqIB03dGaGGHX7oMJ3xZ1o8fD2xCNCe',
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        }}) .then( function(response){
        let data = response.json();
        return data;
    })
    .then(function(data){
        person.firstName = data.data[0].firstName;
        person.lastName = data.data[0].lastName;
        person.username = data.data[0].username;
        person.email = data.data[0].email;
        person.telephone = data.data[0].telephone;
        person.enrollmentDate = data.data[0].enrollmentDate;
        console.log(data.data[0].username);
    })
    .then( function(){
        displayperson();
    });
}

// function to display person
function displayperson(){
    firstName.innerHTML = person.firstName;
    lastName.innerHTML = person.lastName;
    username.innerHTML = person.username;
    email.innerHTML = person.email;
    telephone.innerHTML = person.telephone;
    enrollmentDate.innerHTML = person.enrollmentDate;
}

