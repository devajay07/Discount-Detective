// JavaScript for the page where the user can view and modify their products
// Get the table element
const table = document.querySelector('table');

// Function to create a table row for a product
function createRow(product) {
  const tr = document.createElement('tr');
  const tdProductUrl = document.createElement('td');
  tdProductUrl.textContent = product.name;
  const tdThresholdPrice = document.createElement('td');
  tdThresholdPrice.textContent = product.threshold;
  const tdEmail = document.createElement('td');
  tdEmail.textContent = product.email;
  const tdActions = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');
  tdActions.appendChild(deleteButton);
  tr.appendChild(tdProductUrl);
  tr.appendChild(tdThresholdPrice);
  tr.appendChild(tdEmail);
  tr.appendChild(tdActions);
  return tr;
}

// Add the products to the table when the page loads
// Retrieve the JSON string from localStorage
const trackedProductsJson = localStorage.getItem('trackedProducts');

// Parse the JSON string to retrieve the trackedProducts array
const trackedProducts = JSON.parse(trackedProductsJson);

const products = trackedProducts; 
//  Replace this with a function to retrieve the products from your database or array
for (const product of products) {
  const tr = createRow(product);
  tr.id = product.id;
  table.appendChild(tr);
}

// // Function to delete a product
// function deleteProduct(id) {
//   // Delete the product from the database or array where you are storing the products
//    // Find the index of the product in the array
//    console.log("before",trackedProducts);
//   const index = trackedProducts.findIndex(product =>{
//     console.log("id",product.id);
//     return product.id === id;
//   } );
//   console.log("index",index);
//   // Remove the product from the array
//   trackedProducts.splice(index, 1);
//   console.log(trackedProducts);
//   // Remove the product from the table
//   const rows = table.querySelectorAll('tr');
//   for (const row of rows) {
//     if (row.id === id) {
//       row.remove();
//       break;
//     }
//   }
// }

// // // Function to modify a product
// // function modifyProduct(id, productUrl, thresholdPrice, email) {
// //   // Update the product in the database or array where you are storing the products
// //   // ...
// //   // Update the product in the table
// //   const rows = table.querySelectorAll('tr');
// //   for (const row of rows) {
// //     if (row.id === id) {
// //       const cells = row.querySelectorAll('td');
// //       cells[0].textContent = productUrl;
// //       cells[1].textContent = thresholdPrice;
// //       cells[2].textContent = email;
// //       break;
// //     }
// //   }
// }


// const deleteButtons = document.querySelectorAll('.delete-button');
// console.log(deleteButtons);

// for (const button of deleteButtons) {
//   button.addEventListener('click', function() {
//     const tr = this.parentNode.parentNode;
//     deleteProduct(tr.id);
//   });
// }
