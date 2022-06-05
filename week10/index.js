let form = document.getElementById('form');
let tableBody = document.querySelector('tbody');
let button = document.getElementById('btn');
// The code above this line is just to grab the form, tableBody, and button from the html

form.addEventListener('submit', (event) => {
    event.preventDefault()
    // Above code prevents blank form from being submitted

    const firstName = document.getElementById('inputFirstName4').value;
    const lastName = document.getElementById('inputLastName4').value;
    const emailAddress = document.getElementById('inputEmail').value;
    const phoneNumber = document.getElementById('inputPhone#').value;
    const residence = document.getElementById('inputAddress').value;
    const cityName = document.getElementById('inputCity').value;
    const stateName = document.getElementById('inputState').value;
    const zipCode = document.getElementById('inputZip').value;
    // Above code is the value pulled from each html element for each user input.

    tableBody.innerHTML += `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${emailAddress}</td>
            <td>${phoneNumber}</td>
            <td>${residence}, ${cityName}, ${stateName}</td>
            <td>${zipCode}</td>
        </tr>
    `
})