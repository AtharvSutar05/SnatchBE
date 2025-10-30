import { getIO } from './index.js';

export const handleRoomEvents = (socket) => {
    socket.on('join-room', (roomId) => {
        socket.join(roomId);
        socket.to(roomId).emit('user-connected');
    });

    socket.on('leave-room', (roomId) => {
        socket.leave(roomId);
        socket.to(roomId).emit('user-disconnected');
    });
};
