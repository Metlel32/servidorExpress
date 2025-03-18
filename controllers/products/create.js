
import Product from "../../models/Product.js"
let create = async (req, res, next) =>{
    try {
        let productInfo = req.body
    let createProduct = await Product.create(productInfo)
    return res.status(201).json({
        response: createProduct
    })
    } catch (error) {
        next(error)
    }
}

let createMany = async(req,res,next)=>{
    try {
        let productsInfo = req.body
        if(!Array.isArray(productsInfo)){
            let error = new Error("bad request")
            error.status = 400
            return next(error)
        }


        let createProducts = await Product.insertMany(productsInfo)
        return res.status(201).json({
            response: createProducts
        })



    } catch (error) {
        next(error)
    }
}


export {create, createMany}