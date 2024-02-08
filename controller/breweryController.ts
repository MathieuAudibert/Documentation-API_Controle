import { Request, Response } from 'express';
import { BreweryService } from '../services/breweryServices';

export class BreweryController {
  private breweryService: BreweryService;

  constructor() {
    this.breweryService = new BreweryService();
  }

  public getAllBreweries = async (req: Request, res: Response): Promise<void> => {
    try {
      const breweries = await this.breweryService.getBreweries();
      res.status(200).json(breweries);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}
