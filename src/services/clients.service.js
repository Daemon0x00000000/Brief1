import hotel from '../data/hotel.js'
import clients from "../data/clients.js";
export class ClientsService {

    constructor() {
        this.hotel = hotel;
        this.clients = clients;
    }
    getHotelInfos() {
        return {
            name: this.hotel.name,
            location: this.hotel.location,
            contact: this.hotel.contact,
            facilities:this.hotel.facilities,
        }
    }


    getRooms() {
        return this.hotel.rooms;
    }

    getRoom(id) {
        return this.hotel.rooms.find(room => parseInt(room.id) === parseInt(id));
    }

    reserveRoom(roomId, client) {
        const room = this.getRoom(roomId);
        if (room) {
            room.reserved = true;
            room.client = client;
            return room;
        }
        return null;
    }

    cancelReservation(roomId) {
        const room = this.getRoom(roomId);
        if (room) {
            room.reserved = false;
            room.client = null;
            return room;
        }
        return null;
    }




}