import Puppeteer from 'puppeteer' ;
const trackedProductsJson = localStorage.getItem('trackedProducts');

// Parse the JSON string to retrieve the trackedProducts array
let trackedProducts = JSON.parse(trackedProductsJson);
// if no data found in localstorage
if(trackedProducts === null) trackedProducts = [];

function addProduct(url, threshold, email) {
  // Extract the product details and email from the form input fields
  let product = {
    url: url,
    threshold: threshold,
    email: email
  };

  // Add the product object to the trackedProducts array
  trackedProducts.push(product);

  // Display a success message to the user
  alert('Product added to tracking list!');
  const trackedProductsJson = JSON.stringify(trackedProducts);

// Save the JSON string to localStorage
  localStorage.setItem('trackedProducts', trackedProductsJson);
}


const form = document.getElementById('add-product-form');

if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Extract the values of the input fields
    let url = document.getElementById('product-url').value;
    let threshold = document.getElementById('threshold-price').value;
    let email = document.getElementById('email').value;

    // Check that the input fields are not empty
    if (url && threshold && email) {
      // Call the addProduct function with the extracted values
      addProduct(url, threshold, email);
    } else {
      // Display an error message if the input fields are empty
      alert('Please enter a valid product URL, threshold price & email.');
    }
  });
}


// 
async function logProductNames() {
    if(trackedProducts.length!=0) {
  for (const product of trackedProducts) {
   const browser = await Puppeteer.launch();
   const page = await browser.newPage();
   await page.goto(product.url)
   const productName = await page.evaluate(()=>{
    document.querySelector(".a-span12 span").textContent;
   })

    // Log the product name to the console
    console.log(productName);
  }
}
}

logProductNames();

