const express = require('express');
const app = express();
const mongoose = require('mongoose');
const RestaurantRoutes = require('./routes/RestaurantRoutes');

app.use(express.json());
mongoose.connect('mongodb+srv://thien5919:6A2x6iVsO5cLqhxI@lab3-restaurant-databas.3bjq8.mongodb.net/lab3_restaurant_database?retryWrites=true&w=majority&appName=lab3-restaurant-database')
    .then(() => console.log('✅ MongoDB connected successfully!'))
    .catch(err => console.error(' MongoDB connection error:', err));


app.use(RestaurantRoutes);
app.listen(3000, () => { console.log('Server is running...') });