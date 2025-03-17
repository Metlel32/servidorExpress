import { Schema, model } from "mongoose";

let collection = "Products"
let schema = Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    isAvailable: { type: Boolean, default: true }
  },{
    timestamps: true
  });



  let Product = model(collection, schema)
  export default Product
