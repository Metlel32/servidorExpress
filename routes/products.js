import { Router } from "express";
import { allProducts, productsByName, productsCategory } from "../controllers/products/read.js";
import { create, createMany } from "../controllers/products/create.js";

const routerProducts = Router()
routerProducts.get('/allProducts', allProducts)
routerProducts.get('/name/:nameParams', productsByName)
routerProducts.get('/category/:categoryParams', productsCategory)
routerProducts.post('/create', create)
routerProducts.post('/createMany', createMany)
export default routerProducts