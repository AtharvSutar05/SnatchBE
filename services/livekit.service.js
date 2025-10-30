import { AccessToken } from "livekit-server-sdk";
import { roomServiceClient } from "../config/livekit.js";
import dotenv from "dotenv";
dotenv.config();

// Generate a LiveKit access token for a participant in a room
const createToken = async (roomName, participantName, ttl = '10m') => {
    try {
        const at = new AccessToken(
            process.env.LIVEKIT_API_KEY, 
            process.env.LIVEKIT_API_SECRET, 
            {
                identity: participantName,
                ttl,
            }
        );
        at.addGrant({
            roomJoin: true, 
            room: roomName,
            canPublish: true,
            canSubscribe: true,
        });
      
        return await at.toJwt();
    } catch (error) {
        throw error;
    }
};

// Create a room with options
const createRoom = async (opts) => {
    try {
        const room = await roomServiceClient.createRoom(opts);
        return room;
    } catch (error) {
        throw error;
    }
};

// List all rooms
const listRooms = async () => {
    try {
        const rooms = await roomServiceClient.listRooms();
        return rooms;
    } catch (error) {
        throw error;
    }
};

// Delete a room by name
const deleteRoom = async (roomName) => {
    try {
        await roomServiceClient.deleteRoom(roomName);
        return { success: true };
    } catch (error) {
        throw error;
    }
};

export { createToken, createRoom, listRooms, deleteRoom };
