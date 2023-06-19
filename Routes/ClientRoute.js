import Express from "express";
import {
  Addclientctrl,
  EditClintsctrl,
  GetAllClintsctrl,
  MyClintsctrl,
  SendMAilTOAllctrl,
  getClientById,
  getClientBymobile,
  getClientForCurrentUser
} from "../Controllers/Clientctrl.js";
import { employeeTokenCheck } from "../Middleware/Tokencheck.js";
import { adminTokenCheck } from "../Middleware/TokencheckAdmin.js";

const app = Express();

const Route = Express.Router();

// Client Created
Route.post("/addclient", employeeTokenCheck, Addclientctrl);

//Send Mail to All Client 
Route.post("/sendmail", SendMAilTOAllctrl);

// Get All Client for admin
Route.get("/getallclient", adminTokenCheck  ,GetAllClintsctrl);

// My Client List
Route.get("/myclient/:id", MyClintsctrl);

// Edit Client List
Route.patch("/myclient/:id", EditClintsctrl);

// get client for employee who is login
Route.get("/getclientforemployee", employeeTokenCheck, getClientForCurrentUser);

// get client by id 
Route.get("/getclientbyid", employeeTokenCheck, getClientById);

// get client by id for admin 
Route.get("/getclientforadminbyId", adminTokenCheck, getClientById);

// get Client search by number 
Route.get("/getclientbyNumber", employeeTokenCheck, getClientBymobile);

export default Route;