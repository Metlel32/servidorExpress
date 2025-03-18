
import Store from "../../models/Store.js";
let allStores = async (req, res, next) => {
    try {
        let all = await Store.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        rnext(error)
    }
}

let storeByName = async (req, res, next) => {
    try {
        let nameQuery = req.params.nameParams
        let all = await Store.find({name: nameQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}
let storeIsActive = async (req, res, next) => {
    try {
        let activeStore = req.params.isActiveParams
        let all  = await Store.find({isActive: activeStore})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export { allStores , storeByName, storeIsActive}