import {  Schema, model } from "mongoose";

let collection = "Stores"
let schema = Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: Number, required: true },
    isActive: { type: Boolean, default: true }
},{
    timestamps: true 
})

let Store = model(collection, schema)
export default Store
