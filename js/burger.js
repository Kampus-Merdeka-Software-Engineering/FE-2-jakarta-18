fetch('https://aggressive-scarf-deer.cyclic.app/products/Burger')
  .then((response) => response.json())
  .then((response) => {
    // Memastikan bahwa respons berisi array produk
    const products = Array.isArray(response.data) ? response.data : [];

    // Get the product container element
    const productContainer = document.querySelector('.isi');

    // Loop through each product in the API response
    products.forEach((product) => {
        // Create a card element
        const card = document.createElement('div');
        card.className = 'card';

        // Create card header with product image
        const cardHeader = document.createElement('div');
        cardHeader.className = 'card-header';
        const img = document.createElement('img');
        img.src = product.image; // Assuming there's an 'image' property in your API response
        cardHeader.appendChild(img);

        // Create card message with product name and ingredients
        const cardMessage = document.createElement('div');
        cardMessage.className = 'card-message';
        const nameDiv = document.createElement('div');
        nameDiv.className = 'name';
        const productName = document.createElement('h3');
        productName.textContent = product.variant; // Assuming there's a 'name' property in your API response
        nameDiv.appendChild(productName);

        // Check if 'ingredients' is a string
        if (typeof product.ingredients === 'string') {
            // Split the ingredients string into an array of lines
            const ingredientsArray = product.ingredients.split('\n');
        
            // Create a paragraph for Ingredients
            const ingredientsParagraph = document.createElement('p');
            ingredientsParagraph.innerHTML = `<b>Ingredients:</b>`;
        
            // Create a list for ingredients
            const ingredientsList = document.createElement('ul');
            
            ingredientsArray.forEach((ingredientLine) => {
            // Split each line into ingredient name and quantity
            const [ingredientName, ingredientQuantity] = ingredientLine
                .trim() // Trim leading and trailing spaces
                .replace(/^-/, '') // Remove leading hyphen
                .split(':'); // Split into name and quantity using colon
                
            // Create a list item for each ingredient
            const ingredientItem = document.createElement('li');
            ingredientItem.textContent = `${ingredientName.trim()}: ${ingredientQuantity.trim()}`;
            
            // Append the list item to the ingredients list
            ingredientsList.appendChild(ingredientItem);
            });
        
            // Append the list of ingredients to the paragraph
            ingredientsParagraph.appendChild(ingredientsList);
        
            // Append the paragraph to the product name div
            nameDiv.appendChild(ingredientsParagraph);
        }
    
        // Append product name and ingredients to the card message
        cardMessage.appendChild(nameDiv);

        // Append card header and message to the card
        card.appendChild(cardHeader);
        card.appendChild(cardMessage);

        // Append the card to the product container
        productContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });