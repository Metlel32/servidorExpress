import { Router } from "express";
import {allEmployee, employeeByName, isEmployed} from "../controllers/employees/read.js";
import { create, createEmployees } from "../controllers/employees/create.js";
import validator from "../middlewares/validator.js";
import schemasEmployees from "../schemas/employees/create.js"






const routerEmployee = Router()
routerEmployee.get('/allEmployees', allEmployee)
routerEmployee.get('/name/:nameParams',  employeeByName)
routerEmployee.get('/employed/:employedParams', isEmployed)
routerEmployee.post('/create', validator(schemasEmployees), create)
routerEmployee.post('/createMany', createEmployees )
export default routerEmployee