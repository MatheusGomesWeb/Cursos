const express = require('express');
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

routes.get('/Products', ProductController.index);
routes.post('/Products', ProductController.store);
routes.get('/Products/:id', ProductController.show);
routes.put('/Products/:id', ProductController.update);
routes.delete('/Products/:id', ProductController.delete);

  /*  Product.create({
        title: "React Native",
        description: "Build Native apps with javascript",
        url: "https://github.com/facebook/react-native"
    });*/
   // return res.send("Hello World!");

module.exports = routes;