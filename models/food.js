const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Category: { type: String, required: true },
    Price: { type: String, required: true },
    paid: Boolean,
});

const Book = mongoose.model('Food', foodSchema);

module.exports = Book