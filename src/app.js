import express from "express";

const app = express();

//Crear ruta 
app.get('/ping', (req, res) => {
    res.send("pong");
});

export default app;