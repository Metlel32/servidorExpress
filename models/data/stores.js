import 'dotenv/config.js'
import '../../config/database.js'
import Store from '../Store.js'


let stores = [
    {
        name: "Tech Haven",
        address: "123 Silicon Valley, CA",
        phone: 1234567890,
        isActive: true,
      },
      {
        name: "Gadget World",
        address: "456 Innovation Street, NY",
        phone: 9876543210,
        isActive: false,
      },
      {
        name: "SuperMart",
        address: "789 Commerce Road, TX",
        phone: 1122334455,
        isActive: true,
      },
      {
        name: "Mega Electronics",
        address: "101 Cyber Lane, FL",
        phone: 6677889900,
        isActive: true,
      },
      {
        name: "Fashion Hub",
        address: "555 Style Avenue, LA",
        phone: 3344556677,
        isActive: false,
      }
]

Store.insertMany(stores)