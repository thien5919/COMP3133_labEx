const express = require('express');
const RestaurantModel = require('../models/Restaurant');
const app = express();



// 1. Return all restaurant details
app.get('/restaurants', async (req, res) => {
    try {
        let sortOrder = 1; // Default to ascending
        let sortField = 'name'; // Default sort by 'name'

        // Check for sortBy query parameter
        if (req.query.sortBy) {
            const sortBy = req.query.sortBy.toLowerCase();
            
            if (sortBy === 'asc') {
                sortOrder = 1;
            } else if (sortBy === 'desc') {
                sortOrder = -1;
            }
            const restaurants = await RestaurantModel.find({}, {
                _id: 1,
                cuisine: 1,
                name: 1,
                city: 1,
                restaurant_id: 1
            }).sort({_id : sortOrder});
            return res.json(restaurants);
        }
        const restaurants = await RestaurantModel.find({});
        res.send(restaurants);
    } catch (error) {
        res.status(500).send(error);
    }
});


// 2. Return all restaurant details by cuisine
app.get('/restaurants/cuisine/:cuisine', async (req, res) => {
    try {
        const restaurants = await RestaurantModel.find({ cuisine: req.params.cuisine });
        res.send(restaurants);
    } catch (error) {
        res.status(500)
    }
});



app.get('/restaurants/Delicatessen', async (req, res) => {
    try {
        const restaurants = await RestaurantModel.find({
            cuisine: "Delicatessen"
        }, {    
            _id: 0,
            cuisine: 1,
            name: 1,
            city: 1
        }).sort({ name: 1 });
        res.json(restaurants);
        
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
module.exports = app;