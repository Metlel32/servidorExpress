import { Schema, model } from "mongoose";


let collection = "Employees"
let schema = Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    salary: { type: Number, required: true },
    isEmployed: { type: Boolean, default: true }
})

let Employee = model(collection, schema)
export default Employee