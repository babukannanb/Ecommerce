/**
 * This file will contain the routes logic for the Product resource
 * and will export it.
 */

 const { requestValidator } = require("../middlewares");

 const productController = require("../controllers/product.controller")

 module.exports = function(app){
     
     //Route for the POST request to create the product
     app.post("/ecomm/api/v1/products",[requestValidator.validateProductRequest], productController.create);
 
     //Route for the GET request to fetch all the products
     app.get("/ecomm/api/v1/products", productController.findAll);
 
     //Route for the GET request to fetch a product based on the id
     app.get("/ecomm/api/v1/products/:id", productController.findOne);
 
     //Route for the PUT request to update a product based on the id
     app.put("/ecomm/api/v1/products/:id",[requestValidator.validateProductRequest], productController.update);
 
     //Route for the DELETE request to delete a product based on the id
     app.delete("/ecomm/api/v1/products/:id", productController.delete);
 }