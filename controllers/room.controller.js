import * as roomService from "../services/room.service.js"

const createMeeting = async (req, res) => {
    try {
        const { hostName } = req.body;
        const meetingDetails = await roomService.createMeeting(hostName);
        res.status(200).json({ message: "Meeting created successfully", data: meetingDetails, hostName: hostName});
    } catch(err) {
        res.status(500).json({message: "Failed to create meeting", error: `${err}` });
    }
};


const joinRoom = async (req, res) => {
    try {
        const { roomCode, participantName } = req.body;
        if (!roomCode || !participantName) {
            return res.status(400).json({ message: "roomCode and participantName are required" });
        }
        const joinDetails = await roomService.joinRoom(roomCode, participantName);
        res.status(200).json({ message: "Joined room successfully", data: joinDetails });
    } catch (err) {
        res.status(500).json({ message: "Failed to join room", error: `${err}` });
    }
};

export { createMeeting, joinRoom};