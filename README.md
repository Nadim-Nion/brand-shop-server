---

# GadgetHub Server Side
# Brand Shop Website( Technology & Electronics Category)

Welcome to the GadgetHub Server Side repository! This repository contains the server-side codebase for the GadgetHub e-commerce platform, focusing on Technology and Electronics products.

## Overview

GadgetHub Server Side is responsible for handling user authentication, managing product data, and serving API endpoints to the client-side application. It utilizes Node.js along with Express.js framework for building robust RESTful APIs.

## Key Features

- Backend server implementation for the GadgetHub website.
- Handles user authentication, product management, and cart functionality.
- Communicates with the client-side application for data exchange.
- RESTful API endpoints for user authentication, product management, and cart functionality.
- Error handling middleware for managing HTTP errors.
- Middleware for authentication and authorization.

## Folder Structure:
- **/src**: Contains the source code for the server application.
  - **/controllers**: Contains controllers for handling different routes and business logic.
  - **/models**: Contains database models and schemas.
  - **/routes**: Contains route definitions.
  - **/utils**: Contains utility functions.
- **/config**: Contains configuration files (e.g., Firebase config).
- **/test**: Contains test scripts (optional).
- **/docs**: Contains documentation (e.g., API documentation).

## Key Functionalities:
1. User Authentication:
   - Implement registration and login endpoints.
   - Validate user credentials.
   - Provide JWT tokens upon successful authentication.

2. Product Management:
   - Implement CRUD operations for products.
   - Secure product-related endpoints with authentication middleware.

3. Cart Management:
   - Implement endpoints for adding, viewing, and removing products from the cart.
   - Associate cart data with user IDs.

4. Error Handling:
   - Implement error handling middleware to catch and respond to errors uniformly.

5. Integration with Firebase:
   - Configure Firebase SDK for authentication and database operations.



## Deployment (Backend API)

Vercel : https://brand-shop-server-six-gules.vercel.app/

## Technologies Used

- Node.js
- Express.js
- MongoDB

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

## 🚀 About Me
Hi, I am Nadim Mahmud Nion. I have recently concluded my graduation from the department of Computer Science and Engineering (CSE) at the Daffodil International University (DIU). I have been learning MERN Stack Web Development since 2022. I am expertise in the following skills:

* React 

* Express.js 

* Node.js 

* MongoDB

* Vite

* React Router

* Firebase

* Vercel

* JavaScript

* Advanced JavaScript

* Daisy UI 

* Bootstrap

* Tailwind

* HTML5

* CSS3

* Media Query

I have built multiple projects using these skills. You are invited to my GitHub profile to know about my projects and don't forget to give a star to my projects.



---