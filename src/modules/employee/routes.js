import express from 'express';
import { createEmployee,getEmployee,getEmployeebyId,deleteEmployeebyId,updateEmployee } from './handlers.js';

const Employees = express.Router();

Employees.post('/createEmployee', async (req, res) => {
   
   return await createEmployee(req, res);
});
Employees.get('/getEmployees', async (req, res) => {
   
   return await getEmployee(req, res);
});
Employees.get('/getEmployeeDetails/:empid', async (req, res) => {
   
   return await getEmployeebyId(req, res);
});
Employees.delete('/deleteEmployee/:empid', async (req, res) => {
   
   return await deleteEmployeebyId(req, res);
});
Employees.put('/updateEmployee/:empid', async (req, res) => {
   
   return await updateEmployee(req, res);
});

export default Employees;