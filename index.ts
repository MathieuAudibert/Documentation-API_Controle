import express, { Request, Response } from 'express';
import { BreweryController } from './controller/breweryController';
import axios from "axios";

const app = express();
const breweryController = new BreweryController();

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.get("/test", (req: Request, res: Response) => {
    res.send("Le server marche !");
});

app.get("/breweries", async (req: Request, res: Response) => {
    await breweryController.getBreweries(req, res);
});


app.get("/breweries/city/:city", async (req: Request, res: Response) => {
    const city = req.params.city;
    try {
        const response = await axios.get(`${breweryController.API_URL}?by_city=${city}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('[Erreur]: Erreur lors de la recherche de brasseries par ville.');
    }
});


app.get("/breweries/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const response = await axios.get(`${breweryController.API_URL}/${id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('[Erreur]: Erreur lors de l\'obtention des informations de la brasserie.');
    }
});

app.listen(PORT, () => {
    console.log(`Le server est sur le port: ${PORT}`);
});
