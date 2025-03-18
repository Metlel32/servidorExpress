import Employee from "../../models/Employee.js";
let create = async (req, res, next) => {
    try {
        let employeeInfo = req.body
        let createEmployee = await Employee.create(employeeInfo)
        return res.status(201).json({
            response: createEmployee
        })
    } catch (error) {
        next(error)
    }
}

let createEmployees = async (req, res, next) => {
    try {
        
        let employees = req.body
        if(!Array.isArray(employees)){
            let error = new Error("bad request")
            error.status = 400
           return  next(error)
        }

        let createEmployees = await Employee.insertMany(employees)
        return res.status(201).json({
            response: createEmployees
        })

    } catch (error) {
        next(error)
    }
}

export {create,  createEmployees}