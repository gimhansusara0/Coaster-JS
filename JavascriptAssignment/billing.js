let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favouriteItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];

const write = document.getElementById("description");
let details = '';
let totalPrice = 0;

favouriteItems.forEach((product) => {
    details += `Item: ${product.name} | Price: ${product.total} | Amount: ${product.amount}\n`;
    totalPrice = totalPrice + product.total;
});

write.innerText = `${details}\n Total:${totalPrice}`;



console.log(futureDate);function validateForm() {
    const fname = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const adr = document.getElementById('adr').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const cname = document.getElementById('cname').value;
    const ccnum = document.getElementById('ccnum').value;
    const expmonth = document.getElementById('expmonth').value;
    const expyear = document.getElementById('expyear').value;
    const cvv = document.getElementById('cvv').value;
    const errorMessage = document.getElementById('errorMessage');

    if (!fname || !email || !adr || !city || !state || !zip || !cname || !ccnum || !expmonth || !expyear || !cvv) {
        errorMessage.textContent = 'Please fill in all fields.';
        return;
    }
    errorMessage.textContent = '';
    alert('Form submitted successfully!');
}

function validateForm(){
    alert("Your purchase will arrive in 3 days");
}





























