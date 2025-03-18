import 'dotenv/config.js'
import '../../config/database.js'
import Employee from '../Employee.js'

let employees = [
  { name: "John Doe", position: "Manager", salary: 5000, isEmployed: true },
  { name: "Alice Smith", position: "Sales Associate", salary: 2800, isEmployed: true },
  { name: "Michael Johnson", position: "Cashier", salary: 2500, isEmployed: true },
  { name: "Emily Davis", position: "Warehouse Supervisor", salary: 3200, isEmployed: true },
  { name: "Robert Brown", position: "IT Specialist", salary: 4500, isEmployed: true },
  { name: "Sarah Wilson", position: "Marketing Coordinator", salary: 3500, isEmployed: true },
  { name: "David Martinez", position: "Customer Service Rep", salary: 2700, isEmployed: true },
  { name: "Jessica Taylor", position: "Accountant", salary: 4000, isEmployed: true },
  { name: "William Anderson", position: "Security Guard", salary: 2200, isEmployed: false },
  { name: "Linda Thomas", position: "Cleaning Staff", salary: 2100, isEmployed: true },
  { name: "James White", position: "Logistics Coordinator", salary: 3800, isEmployed: true },
  { name: "Barbara Harris", position: "Receptionist", salary: 2600, isEmployed: true },
  { name: "Richard Lewis", position: "Assistant Manager", salary: 4200, isEmployed: true },
  { name: "Patricia Clark", position: "HR Specialist", salary: 3900, isEmployed: true },
  { name: "Daniel Walker", position: "Delivery Driver", salary: 2400, isEmployed: false }
]


Employee.insertMany(employees)