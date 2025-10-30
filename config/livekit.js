import { RoomServiceClient } from 'livekit-server-sdk';
import dotenv from 'dotenv';

dotenv.config();

export const roomServiceClient = new RoomServiceClient(
    process.env.LIVEKIT_HOST, 
    process.env.LIVEKIT_API_KEY, 
    process.env.LIVEKIT_API_SECRET,
);
