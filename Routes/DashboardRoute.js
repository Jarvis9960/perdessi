import Express from "express";
import { dashboardForTotolNumberFailedofDocument, dashboardForTotolNumberPendingofDocument, dashboardForTotolNumberSuccessofDocument, dashboardForTotolNumberofDocument, dashboardForTotolNumberofDocumentForAdmin, dashboardForTotolNumberofFailedDocumentForAdmin, dashboardForTotolNumberofPendingDocumentForAdmin, dashboardForTotolNumberofSuccessDocumentForAdmin, totalEmployeeAndLead, totalLeadForParticularEmployee } from "../Controllers/DashboardCtrl.js";
import { employeeTokenCheck } from "../Middleware/Tokencheck.js";
import { adminTokenCheck } from "../Middleware/TokencheckAdmin.js";

const app = Express();

const Route = Express.Router();

Route.get(
  "/getnumberofleadforallservice",
  employeeTokenCheck,
  dashboardForTotolNumberofDocument
);

Route.get(
  "/getnumberofleadforallserviceadmin", 
  adminTokenCheck, 
  dashboardForTotolNumberofDocumentForAdmin
)

// Success -- Failed -- Pending

Route.get(
  "/getnumberofsuccessleadforallserviceadmin", 
  adminTokenCheck, 
  dashboardForTotolNumberofSuccessDocumentForAdmin
)

Route.get(
  "/getnumberofsuccesfailedleadforallserviceadmin", 
  adminTokenCheck, 
  dashboardForTotolNumberofFailedDocumentForAdmin
)

Route.get(
  "/getnumberofpendingleadforallserviceadmin", 
  adminTokenCheck, 
  dashboardForTotolNumberofPendingDocumentForAdmin
)


// Success -- Failed -- Pending


Route.get(
  "/getnumberofSuccerssleadforallservice",
  employeeTokenCheck,
  dashboardForTotolNumberSuccessofDocument
);

Route.get(
  "/getnumberoffailedleadforallservice",
  employeeTokenCheck,
  dashboardForTotolNumberFailedofDocument
);

Route.get(
  "/getnumberofpendingleadforallservice",
  employeeTokenCheck,
  dashboardForTotolNumberPendingofDocument
);


// all lead for particular employee for admin
Route.get("/getemployeenumberoflead", adminTokenCheck, totalLeadForParticularEmployee);
Route.get("/getmisreportofleads", adminTokenCheck, totalEmployeeAndLead);



export default Route;
