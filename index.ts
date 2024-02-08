import express, {Request, Response} from "express";
import dotenv from "dotenv";
import axios, {AxiosResponse} from "axios";




const app = express();

app.get("/test", (req: Request, res: Response) => {
    res.send("L'api sur les bar marche!")
})

const PORT: number = process.env.port ? parseInt(process.env.port): 3000;
app.listen(PORT, () => {
    console.log(`Le serveur tourne sur le port ${PORT}`);
});

