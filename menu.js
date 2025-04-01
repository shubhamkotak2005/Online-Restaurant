// Step 1: Get the query parameter from the URL (e.g., ?item=burger)
const params = new URLSearchParams(window.location.search);
const selectedItem = params.get('item'); // e.g., 'burger', 'pizza', etc.

// Step 2: Map item names to their corresponding image paths and display text
const foodDetails = {
    burger: { src: "./images/burger.png", name: "Burger" },
    pizza: { src: "./images/pizza.png", name: "Pizza" },
    taco: { src: "./images/taco.png", name: "Taco" },
    ramen: { src: "./images/ramen.png", name: "Ramen" },
    indian: { src: "./images/indian meal.png", name: "Indian Meal" },
    prawn: { src: "./images/prawn bowl.png", name: "Prawn Bowl" },
    salad: { src: "./images/salad.png", name: "Salad" },
    okonomiyaki: { src: "./images/okonomiyaki.png", name: "Okonomiyaki" },
    tonkatsu: { src: "./images/tonkatsu.png", name: "Tonkatsu" },
    yakisoba: { src: "./images/yakisoba pan noodles.png", name: "Yakisoba" },
    sushi: { src: "./images/sushi.png", name: "Sushi" },
    spaghetti: { src: "./images/spaghetti.png", name: "Spaghetti" },
};

// Step 3: Get the target container
const targetDiv = document.querySelector('.div1');

// Step 4: Dynamically populate the image and its text
if (selectedItem && foodDetails[selectedItem]) {
    // Create a new <img> element for the food image
    const imgElement = document.createElement('img');
    imgElement.src = foodDetails[selectedItem].src; // Set the image source
    imgElement.alt = selectedItem; // Add alt text for accessibility
    imgElement.style.width = "50%"; // Optional styling
    imgElement.style.height = "auto"; // Maintain aspect ratio

    // Create a new <p> element for the food name
    const pTag = document.createElement('p');
    pTag.textContent = foodDetails[selectedItem].name; // Set the food name
    pTag.style.color = "white"; // Optional styling
    pTag.style.fontFamily = "oranienbaum, serif"; // Match the font style

    targetDiv.innerHTML = ''; // Clear any existing content
    targetDiv.appendChild(imgElement); // Append the image
    targetDiv.appendChild(pTag); // Append the text below the image
} else {
    // Handle cases where the 'item' parameter is missing or invalid
    targetDiv.innerHTML = '<p>No food item selected.</p>';
}

var name=prompt("Enter your name: ");
var quantity=prompt("Enter quantity: ");
document.querySelector('.div2').innerHTML = '<p>Thank you '+name +
' for ordering '+foodDetails[selectedItem].name+'!</p>'+
'<p>Quantity: '+quantity+'</p>';