import app from './app.js';
import { createServer } from 'http';
import { initializeSocket } from './sockets/index.js';
import dotenv from 'dotenv';

dotenv.config();

const httpServer = createServer(app);

// Initialize Socket.IO
const io = initializeSocket(httpServer);

const port = process.env.PORT || 5000;

httpServer.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
