import express from 'express'
import {createEmployeeDao,getAllEmployeeDao,getEmployeebyIdDao,deleteagentbyIdDao,updateAgentDao} from '../../dao/employee.js'

export async function createEmployee(req, res) {

    try {
       
        let employee = await createEmployeeDao(req.body)

        res.send({
            statusCode: 200,
            Result: employee,
            status: 'Ok',
            message: "Employee created sucessfully",
        });
    } catch (err) {
        res.send({ statusCode: 500, result: [], status: 'Failure', message: 'internal server error' });
    }
}
export async function updateEmployee(req, res) {

    try {
       
        let employee = await updateAgentDao(req.body,req.params.empid)

        res.send({
            statusCode: 200,
            Result: employee,
            status: 'Ok',
            message: "Employee created sucessfully",
        });
    } catch (err) {
        res.send({ statusCode: 500, result: [], status: 'Failure', message: 'internal server error' });
    }
}

export async function getEmployee(req, res) {

    try {
       
        let employee = await getAllEmployeeDao()

        res.send({
            statusCode: 200,
            Result: employee,
            employeeCount:employee.length,
            status: 'Ok',
            message: "Employees fetched  sucessfully",
        });
    } catch (err) {
        res.send({ statusCode: 500, result: [], status: 'Failure', message: 'internal server error' });
    }
}
export async function getEmployeebyId(req, res) {

    try {
       
        let employee = await getEmployeebyIdDao(req.params.empid)
        res.send({
            statusCode: 200,
            Result: employee,
            status: 'Ok',
            message: "Employee details fetched  sucessfully",
        });
    } catch (err) {
        res.send({ statusCode: 500, result: [], status: 'Failure', message: 'internal server error' });
    }
}
export async function deleteEmployeebyId(req, res) {

    try {
       
        let employee = await deleteagentbyIdDao(req.params.empid)
        res.send({
            statusCode: 200,
            Result: employee,
            status: 'Ok',
            message: "Employee details fetched  sucessfully",
        });
    } catch (err) {
        res.send({ statusCode: 500, result: [], status: 'Failure', message: 'internal server error' });
    }
}
