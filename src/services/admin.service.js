import clientsList from "../data/clients.js";


export class AdminService {
    constructor() {
        this.clients = clientsList;
    }

    getAllClients() {
        return this.clients;
    }

    getClientById(id) {
        return this.clients.find(client => client.id === id);
    }

    addClient(client) {
        this.clients.push(client);
        return client;
    }

    editClient(client) {
        const index = this.clients.findIndex(c => c.id === client.id);
        this.clients[index] = client;
        return this.clients[index];
    }

    deleteClient(id) {
        const index = this.clients.findIndex(c => c.id === id);
        this.clients.splice(index, 1);
        return true;
    }


}