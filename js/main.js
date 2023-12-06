fetch('http://localhost:3000/products', {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'GET'
})
.then((result) => result.json())
.then((result) => {
    console.log(result)
})
.catch((err) => {
    console.log(err)
})

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