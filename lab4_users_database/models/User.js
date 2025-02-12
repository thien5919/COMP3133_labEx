const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
    street: { type: String, required: true },
    suite: { type: String, required: true },
    city: { 
        type: String, 
        required: true,
        validate: {
            validator: function(city) {
                return /^[a-zA-Z\s]+$/.test(city);
            },
            message: "City name can only contain alphabets and spaces"
        }
    },
    zipcode: { 
        type: String, 
        required: true,
        validate: {
            validator: function(zipcode) {
                return /^\d{5}-\d{4}$/.test(zipcode);
            },
            message: "Zipcode must be in 12345-1234 format"
        }
    },
    geo: {
        lat: { type: String, required: true },
        lng: { type: String, required: true }
    }
});

const CompanySchema = new mongoose.Schema({
    name: { type: String, required: true },
    catchPhrase: { type: String, required: true },
    bs: { type: String, required: true }
});

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, minlength: 4 },
    email: { 
        type: String, 
        required: true,
        validate: {
            validator: function(email) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            },
            message: "Invalid email format"
        }
    },
    address: { type: AddressSchema, required: true },
    phone: { 
        type: String, 
        required: true,
        validate: {
            validator: function(phone) {
                return /^1-\d{3}-\d{3}-\d{4}$/.test(phone);
            },
            message: "Phone number must be in 1-123-123-1234 format"
        }
    },
    website: { 
        type: String, 
        required: true,
        validate: {
            validator: function(website) {
                return /^(https?:\/\/)[^\s/$.?#].[^\s]*$/.test(website);
            },
            message: "Invalid website format"
        }
    },
    company: { type: CompanySchema, required: true }
});


const User = mongoose.model("User", UserSchema);
module.exports = User;
