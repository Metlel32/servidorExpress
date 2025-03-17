import Store from "../../models/Store.js";


let create = async (req, res, next) => {
    try {
        let storeInfo = req.body
        let createStore = await Store.create(storeInfo)
        return res.status(201).json({
            response: createStore
        })
    } catch (error) {
        next(error)
    }
}
let createMany = async ( req, res, next)=>{
    try {
        let stores = req.body
        if(!Array.isArray(stores)){
            let error = new Error("bad request")
            error.status = 400
           return  next(error)
        }

        let createStores = await Store.insertMany(stores) 

        return res.status(201).json({
            response:createStores
        })


    } catch (error) {
        next(error)
    }
}

export {create, createMany}