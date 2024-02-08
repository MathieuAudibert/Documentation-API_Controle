import express, { Request, Response } from 'express';
import { BreweryController } from 'controller/breweryController';

const app = express();
const breweryController = new BreweryController();

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.get("/test", (req: Request, res: Response) => {
    res.send("Le server marche !");
});

app.get("/breweries", async (req: Request, res: Response) => {
    await breweryController.getBreweries(req, res);
});

app.listen(PORT, () => {
    console.log(`Le server est sur le port: ${PORT}`);
});
