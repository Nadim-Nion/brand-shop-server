const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qf8hqc8.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const database = client.db('productDB');
        const productCollection = database.collection('product');
        const categoryCollection = database.collection('category');
        const cartCollection = database.collection('cart');

        // Brand names and their associated images
        app.get('/allCategories', async (req, res) => {
            const cursor = categoryCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        // Get all products data
        app.get('/allProducts', async (req, res) => {
            const cursor = productCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        app.post('/allProducts', async (req, res) => {
            const newProduct = req.body;
            console.log(newProduct);
            const result = await productCollection.insertOne(newProduct);
            res.send(result);
        })

        // Get the products data based on brand-name
        app.get('/products/:brand', async (req, res) => {
            const brandName = req.params.brand;
            const cursor = productCollection.find({ brand: brandName });
            const result = await cursor.toArray();
            res.send(result);
        });

        // Get the specific product by it's id
        app.get('/product/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await productCollection.findOne(query);
            res.send(result);
        })

        // Update the specific product by it's id
        app.put('/product/:id', async (req, res) => {
            const id = req.params.id;
            const product = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedProduct = {
                $set: {
                    image: product.image,
                    name: product.name,
                    brand: product.brand,
                    type: product.type,
                    price: product.price,
                    description: product.description,
                    rating: product.image
                }
            }
            const result = await productCollection.updateOne(filter, updatedProduct, options);
            res.send(result);
        })

        // Add to Cart products & delete product from cart
        app.get('/cart', async (req, res) => {
            const cursor = cartCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        app.post('/cart', async (req, res) => {
            const newCart = req.body;
            const result = await cartCollection.insertOne(newCart);
            res.send(result);
        })

        app.delete('/cart/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: id };
            const result = await cartCollection.deleteOne(query);
            res.send(result);
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Brand Shop Server is running');
})

app.listen(port, () => {
    console.log(`Brand shop server is running on PORT: ${port}`);
})