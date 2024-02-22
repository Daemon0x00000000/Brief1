import express from "express";
import {AdminController} from "../controllers/admin.controller.js";
import isAdmin from "../middlewares/isAdmin.middleware.js";


const adminRouter = express.Router();
const adminController = new AdminController()

adminRouter.get("/allClients",isAdmin, adminController.getClients.bind(adminController))

adminRouter.get("/client/:id",isAdmin, adminController.getClient.bind(adminController))

adminRouter.post("/addClient",isAdmin, adminController.addClient.bind(adminController))

adminRouter.put("/updateClient/:id",isAdmin, adminController.updateClient.bind(adminController))

adminRouter.delete("/deleteClient/:id",isAdmin, adminController.deleteClient.bind(adminController))

adminRouter.post("/reserve",isAdmin, adminController.reserve.bind(adminController))

adminRouter.post("/cancelReservation",isAdmin, adminController.cancel.bind(adminController))


export default adminRouter;