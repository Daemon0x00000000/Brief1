import {ClientsService} from "../services/clients.service.js";
import {AdminService} from "../services/admin.service.js";

export class AdminController {
    constructor() {
        this.clientsService = new ClientsService();
        this.adminService = new AdminService();
    }

    getClients(req,res) {
        res.send(this.adminService.getAllClients())
    }

    getClient(req,res) {
        res.send(this.adminService.getClientById(req.params.id))
    }

    addClient(req,res) {
        res.send(this.adminService.addClient(req.body))
    }

    updateClient(req,res) {
        res.send(this.adminService.editClient(req.params.id, req.body))
    }

    deleteClient(req,res) {
        res.send(this.adminService.deleteClient(req.params.id))
    }

    reserve(req,res) {
        const body = req.body;
        res.send(this.clientsService.reserveRoom(body.clientId, body.roomId))
    }

    cancel(req,res) {
        const body = req.body;
        res.send(this.clientsService.cancelReservation(body.clientId, body.roomId))
    }


}