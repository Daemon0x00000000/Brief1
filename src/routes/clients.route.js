import express from "express";
import {ClientsController} from "../controllers/clients.controller.js";
import isClient from "../middlewares/isClient.middleware.js";
import isAdmin from "../middlewares/isAdmin.middleware.js";


const clientsRouter = express.Router()

const clientsController = new ClientsController()

clientsRouter.get('/hotel', clientsController.getHotelInfo.bind(clientsController))

clientsRouter.get('/rooms', clientsController.getRooms.bind(clientsController))

clientsRouter.get('/room/:id', clientsController.getRoom.bind(clientsController))

clientsRouter.put('/reserve', isClient, clientsController.reserveRoom.bind(clientsController))

clientsRouter.post('/cancel', isClient, clientsController.cancelReservation.bind(clientsController))

export default clientsRouter