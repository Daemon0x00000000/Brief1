import {ClientsService} from "../services/clients.service.js";


export class ClientsController {
    constructor() {
        this.clientsService = new ClientsService();
    }

    getHotelInfo(req,res) {
        res.json(this.clientsService.getHotelInfos());
    }

    getRooms(req,res) {
        res.json(this.clientsService.getRooms());
    }

    getRoom(req,res) {
        res.json(this.clientsService.getRoom(req.params.id));
    }

    reserveRoom(req,res) {
        const body = req.body;
        res.json(this.clientsService.reserveRoom(body.roomId, body.clientId));
    }

    cancelReservation(req,res) {
        const body = req.body;
        res.json(this.clientsService.cancelReservation(body.roomId, body.clientMail));
    }
}