import { version } from "mongoose";

export const getLatestVersion = async(req, res) => {
    try { 
        res.status(200).json({
            version: "1.0.0",
            mandatory: false,
            changelog: "Initial release with core features including meeting creation, joining rooms, and real-time communication."
        });
    } catch {
        res.status(500).json({
            error: "Server Issue",
        });
    }
};