import { generateMeetingCode } from "../utils/generateCode.js";
import { createToken, createRoom } from "../services/livekit.service.js";

const createMeeting = async (hostName) => {
    const meetingCode = generateMeetingCode();
    const roomName = `room-${meetingCode}`;

    // Room options (customize as needed)
    const roomOptions = {
        name: roomName,
        emptyTimeout: 10 * 60, // 10 minutes
        maxParticipants: 3, // one-to-one meeting
    };

    try {
        // Establish the room
        await createRoom(roomOptions);
        // Generate host token
        const hostToken = await createToken(roomName, hostName);
        return { meetingCode, hostToken };
    } catch (error) {
        // Handle room creation failure
        throw new Error(`Failed to create meeting: ${error.message}`);
    }
}

// Join a room using roomCode and participantName
const joinRoom = async (roomCode, participantName) => {
    const roomName = `room-${roomCode}`;
    try {
        // Optionally, you can check if the room exists here by calling listRooms and searching for roomName
        const token = await createToken(roomName, participantName);
        return { roomName, token };
    } catch (error) {
        throw new Error(`Failed to join room: ${error.message}`);
    }
}

export { createMeeting, joinRoom };
