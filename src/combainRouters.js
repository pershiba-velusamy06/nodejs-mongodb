import express from 'express';
import Employees from './modules/employee/routes.js';


const rootRouter = express.Router();

rootRouter.use('/employee', Employees);

export default rootRouter;
