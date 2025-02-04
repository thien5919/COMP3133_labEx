const mongoose = require('mongoose');
const Restaurant = require('./models/Restaurant'); 

mongoose.connect('mongodb+srv://thien5919:6A2x6iVsO5cLqhxI@lab3-restaurant-databas.3bjq8.mongodb.net/lab3_restaurant_database?retryWrites=true&w=majority&appName=lab3-restaurant-database')
    .then(() => console.log('✅ MongoDB connected successfully!'))
    .catch(err => console.error(' MongoDB connection error:', err));

const data = require('./data/Restaurant-Seed-Data.json'); 

Restaurant.insertMany(data)
  .then(() => {
    console.log('Data inserted successfully');
    mongoose.disconnect();
  })
  .catch(err => console.error(err));
