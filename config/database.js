import mongoose from "mongoose";
let url = process.env.URI_MONGO

mongoose.connect(url)
.then(()=> console.log('Database connect'))
.catch(error => console.log(error))