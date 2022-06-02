const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Category: { type: String, required: true },
    Price: { type: String, required: true },
    Paid: Boolean,
    Image: { type: String, required: true },
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food