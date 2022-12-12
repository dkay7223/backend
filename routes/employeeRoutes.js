import express from "express";

import { getEmployees,removeEmployee,updateEmployee, addEmployee,getEmployeeByID } from "../Controllers/employeeController.js";

const router= express.Router();

router.get('/',getEmployees);
router.post('/addemployee', addEmployee)
router.get('/:id', getEmployeeByID)
router.delete('/remove/:id', removeEmployee)
router.patch('/update/:id',updateEmployee)
export default router;