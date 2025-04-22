
import Product from "../../models/Product.js";
let allProducts = async (req, res, next) => {
    try {


        let {name, category} = req.query
        let query = {}
        if(name){
            query.name = {$regex: name ,$options: 'i'}
        }
        if(category){
            query.category = {$regex: category, $options: 'i'}
        }
        
        let all = await Product.find(query)
        return res.status(200).json({
            response:all
        })
    } catch (error) {
        next(error)
    }
}



let productsByName = async (req, res, next)=>{
    try {
        let nameQuery = req.params.nameParams
        let all = await Product.find({name: nameQuery})
        
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}


let productsCategory = async (req, res, next) => {
    try {
        let categoryQuery = req.params.categoryParams
        let all = await Product.find({category: categoryQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}




export {allProducts, productsByName, productsCategory}