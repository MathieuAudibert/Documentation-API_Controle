import express, { Request, Response } from 'express';
import { BreweryController } from './controller/breweryController';
import axios from "axios";
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { swaggerOptions } from './swagger/swaggerOptions';
import swaggerJSDoc from 'swagger-jsdoc';
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

    app.get("/breweries/name/:names", async (req: Request, res: Response) => {
    await breweryController.getBreweryByName(req, res);
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


const specs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


app.listen(PORT, () => {
    console.log(`Le server est sur le port: ${PORT}`);
});
