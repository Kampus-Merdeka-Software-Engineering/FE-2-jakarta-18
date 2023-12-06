// fetch('http://localhost:3000/products', {
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     method: 'GET'
// })
// .then((result) => result.json())
// .then((result) => {
//     console.log(result)
// })
// .catch((err) => {
//     console.log(err)
// })

// fetch('http://localhost:3000/products', {
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     method: 'POST',
//     body: JSON.stringify({
//         name: "Donut",
//         price: 5000,
//         description: "text"
//     })
// })
// .then((result) => result.json())
// .then((result) => {
//     console.log(result)
// })
// .catch((err) => {
//     console.log(err)
// })



document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form values
    const name = document.getElementById('nameInput').value;
    const phoneNumber = document.getElementById('phoneInput').value;
    const email = document.getElementById('emailInput').value;
    const message = document.getElementById('messageInput').value;

    // Create data object
    const data = {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        message: message
    };

    console.log(data)

    // Make the fetch request
    fetch('http://localhost:3000/products', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(result => result.json())
    .then(result => {
        console.log(result);
        // Handle the response from the server as needed
    })
    .catch(err => {
        console.error(err);
        // Handle errors
    });
});