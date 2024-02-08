import axios, { AxiosResponse } from 'axios';
import { Request, Response } from 'express';
import { OPEN_BREWERY_DB_BASE_URL } from "../constants/config";

/**
* @swagger
* /breweries/name/{names}:
*  get:
*    summary: Récupère les informations sur une adresse IP.
*    tags: [names]
*    parameters:
*      - in: path
*        name: names
*        required: true
*        description: Adresse IP dont on souhaite récupérer les informations.
*        schema:
*          type: string
*    responses:
*      200:
*        description: Succès, les informations sur l'adresse IP sont récupérées.
*      
*/


export class BreweryController {
  public API_URL: string;


  constructor() {
    this.API_URL = OPEN_BREWERY_DB_BASE_URL;
  }





  public async getBreweries(req: Request, res: Response): Promise<void> {
    try {
      const response: AxiosResponse = await axios.get(`${this.API_URL}`);
      res.json(response.data);
    } catch (error) {
      res.status(500).send('[Erreur]: Erreur lors de la recherche de bar.');
    }
  }


  public async getBreweriesByCity(req: Request, res: Response): Promise<void> {
    const city = req.params.city;
    try {
      const response: AxiosResponse = await axios.get(`${this.API_URL}?by_city=${city}`);
      res.json(response.data);
    } catch (error) {
      res.status(500).send('[Erreur]: Erreur lors de la recherche de brasseries par ville.');
    }
  }

  public async getBreweryByName(req: Request, res: Response): Promise<void> {
    const { names } = req.params;
    try {
      const response: AxiosResponse = await axios.get(`${this.API_URL}?by_name=${encodeURI(names)}`);
      res.json(response.data);
    } catch (error) {
      res.status(500).send('An error occurred while retrieving the brewery.');
    }
  }

  public async getBreweryDetails(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    try {
      const response: AxiosResponse = await axios.get(`${this.API_URL}/${id}`);
      res.json(response.data);
    } catch (error) {
      res.status(500).send('[Erreur]: Erreur lors de l\'obtention des informations de la brasserie.');
    }
  }
}
