import express from "express";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import { readFileSync } from "fs";

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
    ws.on("message", (data) => {
        console.log("Data from client: %s", data);
        //console.log(data.toString());
        ws.send("aapka dhanyawaad.....");
    });
});

const port = 8080;

// Serve the HTML file
app.get('/', (req, res) => {
    const html = readFileSync('index.html', 'utf8');
    res.send(html);
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
