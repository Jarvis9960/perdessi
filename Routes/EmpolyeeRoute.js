import Express from "express";
import {  addemployee, employeelogin, getEmpolyeeID, getEmpolyeeIDforadmin, getEmpolyeebyNum, getallemployee, updateempolyeedata, updatepass } from "../Controllers/Empolyeectrls.js";
import { employeeTokenCheck } from "../Middleware/Tokencheck.js";
import { adminTokenCheck } from "../Middleware/TokencheckAdmin.js";


//rest object
const app = Express();

const route = Express.Router();

// get all employee route
route.get('/getallemployee', getallemployee);

// get employee by there id numbers route
route.get('/getemployeebyIdNum',adminTokenCheck, getEmpolyeebyNum);

// get my Emopyee ID
route.get('/getEmpolyeeID',employeeTokenCheck, getEmpolyeeID);

// get my Emopyee ID
route.get('/getEmpolyeeIDforadmin/:id', getEmpolyeeIDforadmin);

// add employee
route.post('/addemployee',addemployee);

// chnage password
route.patch('/updatepassword/:id',updatepass);

// chnage empolyee
route.patch('/updateempolyee/:id',updateempolyeedata);

//  employee Login
route.post('/employeelogin',employeelogin);


// Export

export default route