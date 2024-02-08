import axios, { AxiosResponse } from 'axios';
import { Request, Response } from 'express';
import { OPEN_BREWERY_DB_BASE_URL } from "../constants/config";

export class BreweryController {
  private API_URL: string;

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
}
