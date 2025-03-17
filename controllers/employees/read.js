import { request, response } from "express";
import Employee from "../../models/Employee.js";

let allEmployee = async (req, res, next) => {
    try {
        let all = await Employee.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        rnext(error)
    }
}


let employeeByName = async (req,res,next) => {
    try {
        let nameQuery = req.params.nameParams
        let all = await Employee.find({name: nameQuery})
        
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let isEmployed = async(req, res, next)=>{
    try {
        let employedQuery = req.query.employedParams
        let all = await Employee.find({employed: employedQuery})
        return res.status(200).json({
            response:all
        })
    } catch (error) {
        next(error)
    }
}

export { allEmployee, employeeByName, isEmployed}