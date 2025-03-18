import { Router } from "express";
import { allStores, storeByName, storeIsActive } from "../controllers/stores/read.js";
import { create, createMany } from "../controllers/stores/create.js";


const routertAllStores = Router()
routertAllStores.get('/allStores', allStores)
routertAllStores.get('/name/:nameParams', storeByName)
routertAllStores.get('/isActive/:isActiveParams', storeIsActive)
routertAllStores.post('/create', create)
routertAllStores.post('/createMany', createMany)
export default routertAllStores