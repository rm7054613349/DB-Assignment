
Question--
Create schema in any Database script or any ORM (Object Relational Mapping).

Ans--MongoDB Schema


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Product Category Schema
const ProductCategorySchema = new Schema({
    name: String,
    desc: String,
    created_at: Date,
    modified_at: Date,
    deleted_at: Date
});


// Discount Schema
const DiscountSchema = new Schema({
    name: String,
    desc: String,
    discount_percent: Number,
    active: Boolean,
    created_at: Date,
    modified_at: Date,
    deleted_at: Date
});



// Product Inventory Schema
const ProductInventorySchema = new Schema({
    quantity: Number,
    created_at: Date,
    modified_at: Date,
    deleted_at: Date
});



// Product Schema
const ProductSchema = new Schema({
    name: String,
    desc: String,
    SKU: String,
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductCategory'
    },
    inventory_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductInventory'
    },
    price: Number,
    discount_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Discount'
    },
    created_at: Date,
    modified_at: Date,
    deleted_at: Date
});

module.exports = {
    ProductCategoryModel: mongoose.model('ProductCategory', ProductCategorySchema),
    DiscountModel: mongoose.model('Discount', DiscountSchema),
    ProductInventoryModel: mongoose.model('ProductInventory', ProductInventorySchema),
    ProductModel: mongoose.model('Product', ProductSchema)
};
