import axios, { AxiosResponse } from 'axios';
import { Request, Response } from 'express';
import { OPEN_BREWERY_DB_BASE_URL } from "../constants/config";

/**
 * @swagger
 * tags:
 *  name: Brewery
 *  description: Operations liés à  la météo
 */

export class BreweryController {
  public API_URL: string;


  constructor() {
    this.API_URL = OPEN_BREWERY_DB_BASE_URL;
  }

/**
   * @swagger
   * /breweries/name/{names}:
   *   get:
   *     summary: Obtient les informations météo.
   *     description: Récupère les informations météo pour une ville donnée.
   *     tags: [Brewery]
   *     parameters:
   *       - in: path
   *         name: names
   *         required: true
   *         description: Nom du bar.
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Succès. Retourne les données météo.
   *       400:
   *         description: Requête incorrecte. Vérifiez les paramètres.
   */
  /**
   * @swagger
   * /breweries/city/{city}:
   *   get:
   *     summary: Obtient les informations météo.
   *     description: Récupère les informations météo pour une ville donnée.
   *     tags: [Brewery]
   *     parameters:
   *       - in: path
   *         name: city
   *         required: true
   *         description: Nom de la ville.
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Succès. Retourne les données météo.
   *       400:
   *         description: Requête incorrecte. Vérifiez les paramètres.
   */
    /**
   * @swagger
   * /breweries/{id}:
   *   get:
   *     summary: Obtient les informations météo.
   *     description: Retourne les données du bar par rapport a l'id.
   *     tags: [Brewery]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Id.
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Succès. Retourne les données du bar par rapport a l'id.
   *       400:
   *         description: Requête incorrecte. Vérifiez les paramètres.
   */

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
