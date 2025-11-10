import { version } from "mongoose";

export const getLatestVersion = async(req, res) => {
    try { 
        res.status(200).json({
            version: "1.0.0",
            buildNumber: 1,
            mandatory: true,
            url: "https://github.com/AtharvSutar05/snatch-app",
            sha256: "e9f97c45a7a3fcbce5e4f3b56a0c0fa0d9d1b09c5cbf8a7ef2c2c6adfc2b5e22",
            changelog: "Initial release with core features including meeting creation, joining rooms, and real-time communication."
        });
    } catch(err) {
        res.status(500).json({
            error: `Server Issue: ${err}`,
        });
    }
};