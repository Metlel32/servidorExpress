import { Router } from "express";
import routerEmployee from "./employees.js";
import routerAllProducts from "./products.js";
import routertAllStores from "./stores.js";

let routerIndex = Router()

routerIndex.use('/employee', routerEmployee)
routerIndex.use('/product', routerAllProducts)
routerIndex.use('/store', routertAllStores)


export default routerIndex
