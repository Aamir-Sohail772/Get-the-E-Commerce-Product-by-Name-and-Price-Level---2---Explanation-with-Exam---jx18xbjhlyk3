const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

// Middlewares
app.use(express.json());

// GET endpoint for sending the products to client by id
// Endpoint - /api/v1/products/:id
app.get('/api/v1/products/:id', (req, res) => {
  // Retrieve the 'id' parameter from the request object
  const productId = parseInt(req.params.id);

  // Search for the product in the array of products by matching 'id'
  const product = products.find((item) => item.id === productId);

  if (!product) {
    // If no product is found, return a JSON response with a status code of 404 and a message
    return res.status(404).json({ status: "failed", message: "Product not found!" });
  }

  // If a product is found, return the product object with a status code of 200
  return res.status(200).json({
    status: "success",
    message: "Product fetched successfully",
    data: { product },
  });
});

module.exports = app;


















// const fs = require("fs");
// const express = require("express");
// const app = express();

// // Importing products from products.json file
// const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

// //Middlewares
// app.use(express.json());

// // GET endpoint for sending the products to client by id
// //// Endpoint - /api/v1/products/:id

// module.exports = app;
