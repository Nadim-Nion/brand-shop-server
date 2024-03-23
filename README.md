---

# GadgetHub Server Side
# Brand Shop Website( Technology & Electronics Category)

Welcome to the GadgetHub Server Side repository! This repository contains the server-side codebase for the GadgetHub e-commerce platform, focusing on Technology and Electronics products.

## Overview

GadgetHub Server Side is responsible for handling user authentication, managing product data, and serving API endpoints to the client-side application. It utilizes Node.js along with Express.js framework for building robust RESTful APIs.

## Key Features

- RESTful API endpoints for user authentication, product management, and cart functionality.
- Error handling middleware for managing HTTP errors.
- Middleware for authentication and authorization.


## Deployment (Backend API)

Vercel : 

## Technologies Used

- Node.js
- Express.js

## Installation

1. Clone the repository:

```
git clone https://github.com/Nadim-Nion/brand-shop-server
cd GadgetHub-Server-Side
```

2. Install dependencies:

```
npm install
```

3. Start the server:

```
npm start
```

## API Endpoints


1. **Get All Categories**
   - Description: Fetches all categories along with their associated images.
   - Method: GET
   - Endpoint: `/allCategories`

2. **Get All Products**
   - Description: Retrieves data of all products available.
   - Method: GET
   - Endpoint: `/allProducts`

3. **Add New Product**
   - Description: Adds a new product to the database.
   - Method: POST
   - Endpoint: `/allProducts`
   - Request Body: JSON object representing the new product

4. **Get Products by Brand**
   - Description: Retrieves products based on a specific brand name.
   - Method: GET
   - Endpoint: `/products/:brand`
   - Parameters: `brand` (Brand name)

5. **Get Product by ID**
   - Description: Retrieves a specific product based on its ID.
   - Method: GET
   - Endpoint: `/product/:id`
   - Parameters: `id` (Product ID)

6. **Update Product by ID**
   - Description: Updates a specific product based on its ID.
   - Method: PUT
   - Endpoint: `/product/:id`
   - Parameters: `id` (Product ID)
   - Request Body: JSON object representing the updated product details

7. **Get Cart Items**
   - Description: Retrieves all items in the user's cart.
   - Method: GET
   - Endpoint: `/cart`

8. **Add Product to Cart**
   - Description: Adds a product to the user's cart.
   - Method: POST
   - Endpoint: `/cart`
   - Request Body: JSON object representing the product to be added to the cart

9. **Delete Product from Cart**
   - Description: Deletes a product from the user's cart.
   - Method: DELETE
   - Endpoint: `/cart/:id`
   - Parameters: `id` (Product ID)



## Contributing

Contributions are welcome! Please open a pull request for any improvements, bug fixes, or new features.

## License

This project is licensed under the [MIT License](LICENSE).

---