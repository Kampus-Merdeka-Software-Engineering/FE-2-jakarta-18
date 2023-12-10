document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
  
    // Fungsi untuk menambahkan atau menghapus kelas 'scrolled' pada header saat di-scroll
    function handleScroll() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  
    // Tambahkan event listener pada window untuk mendeteksi scroll
    window.addEventListener('scroll', handleScroll);
  
    // Panggil fungsi handleScroll untuk menentukan status awal
    handleScroll();
});

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('nameInput').value;
    const phone_number = document.getElementById('phoneInput').value;
    const email = document.getElementById('emailInput').value;
    const message = document.getElementById('messageInput').value;

    // Create data object
    const data = {
        name: name,
        phone_number: phone_number,
        email: email,
        message: message
    };

    // Make the fetch request
    fetch('http://localhost:3000/contacts', {
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

        // Clear form fields
        document.getElementById('nameInput').value = '';
        document.getElementById('phoneInput').value = '';
        document.getElementById('emailInput').value = '';
        document.getElementById('messageInput').value = '';

        // Display success alert
        alert('Pesan telah terkirim!');
    })
    .catch(err => {
        console.error(err);
        // Handle errors
        // Optionally display an error alert
        alert('Gagal mengirim pesan. Silakan coba lagi.');
    });
});
