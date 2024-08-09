console.log("Starting System")
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favouriteItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];
let currentView = 'cart';

const products = [
    {name: "Avocado", pricePerKg: 640},
    {name: "Banana", pricePerKg: 200},
    {name: "Grapes", pricePerKg: 700},
    {name: "Oranges", pricePerKg: 500},
    {name: "Papaya", pricePerKg: 640},
    {name: "Water Melon", pricePerKg: 680},
    {name: "Carrots", pricePerKg: 670},
    {name: "Onions", pricePerKg: 670},
    {name: "Potatos", pricePerKg: 670},
    {name: "Pumpkins", pricePerKg: 670},
    {name: "Tomatos", pricePerKg: 670},
    {name: "Cabbage", pricePerKg: 670},
    {name: "Bounty", pricePerKg: 670},
    {name: "Choc Milk", pricePerKg: 670},
    {name: "Creamoo", pricePerKg: 670},
    {name: "Hot Choc", pricePerKg: 670},
    {name: "Malt Choc", pricePerKg: 670},
    {name: "Ice cream", pricePerKg: 670},
    {name: "Steak", pricePerKg: 670},
    {name: "Sausages", pricePerKg: 670},
    {name: "Fish", pricePerKg: 670},
    {name: "Fishn", pricePerKg: 670},
    {name: "Prawns", pricePerKg: 670},
    {name: "Eggs", pricePerKg: 670}
];

function addToCart(productIndex){
    const amount = parseFloat(document.getElementById(`amount-${productIndex}`).value);
    if (isNaN(amount) || amount <= 0) {
        alert("Enter a valid number");
        return;
    }
    const product = {
        name: products[productIndex].name,
        amount: amount,
        pricePerKg: products[productIndex].pricePerKg,
        total: amount * products[productIndex].pricePerKg,
        favourites: false
    };

    // Check if the item already exists in the cart
    const existingProductIndex = cart.findIndex(item => item.name === product.name);

    if (existingProductIndex !== -1) {
        // Update the existing item
        cart[existingProductIndex].amount += amount;
        cart[existingProductIndex].total = cart[existingProductIndex].amount * cart[existingProductIndex].pricePerKg;
    } else {
        // Add new item
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartTable(cart);
    console.log("Product Added/Updated");
}



function updateCartTable(items) {
    const tbody = document.getElementById("cart-table").getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    let total = 0;

    items.forEach((item, index) => {
        const row = tbody.insertRow();
        row.insertCell(0).innerHTML = item.name;
        const amountCell = row.insertCell(1);
        amountCell.innerHTML = `<input type="number" id="amount-${index}" value="${item.amount}" onchange="updateAmount(${index}, this.value)">`;
        row.insertCell(2).innerText = item.pricePerKg.toFixed(2);
        row.insertCell(3).innerText = item.total.toFixed(2);
        const removeCell = row.insertCell(4);
        removeCell.innerHTML = `<button onclick="removeItem(${index})">X</button>`;
        total += item.total;
        
    });

    console.log(total);
    const rowTwo = tbody.insertRow();
    rowTwo.insertCell(0).innerText = "TOTAL";
    rowTwo.insertCell(1).innerText = `${total}`;
}

function removeItem(index) {
    if (currentView === 'cart') {
        // Remove from cart
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartTable(cart);
    } else if (currentView === 'favourites') {
        // Remove from favourites
        favouriteItems.splice(index, 1);
        localStorage.setItem('favouriteItems', JSON.stringify(favouriteItems));
        updateCartTable(favouriteItems);
    }
}


function updateAmount(index, newAmount){
    const amount = parseFloat(newAmount);
    if (isNaN(amount) || amount <= 0){
        alert('Please enter a valid amount');
        return;
    }

    cart[index].amount = amount;
    cart[index].total = amount * cart[index].pricePerKg;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartTable(cart);
}


updateCartTable(cart)

function addToFavourites(){
    cart.forEach((item)=>{
        favouriteItems.push(item);
        localStorage.setItem('favouriteItems', JSON.stringify(favouriteItems));
        console.log("Favourites Added");
    });
    
}

function applyFavourites() {
    favouriteItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];
    updateCartTable(favouriteItems);
    console.log("Favourites Applied");
    currentView = 'favourites';
    alert("Note: Any changes will now be made for 'FAVOURITE ITEMS'");

    // Iterate over favouriteItems to update the corresponding input fields
    favouriteItems.forEach((favItem) => {
        // Find index in the products array
        const productIndex = products.findIndex(product => product.name === favItem.name);
        console.log(`Product index: ${productIndex}`);
        if (productIndex !== -1) {
            const changeInput = document.getElementById(`amount-${productIndex}`);
            if (changeInput) {
                changeInput.value = favItem.amount;
            }
        }
    });
}


function showCart(){
    updateCartTable(cart);
    currentView = 'cart';
    alert("Note: You are now editing cart products")
}