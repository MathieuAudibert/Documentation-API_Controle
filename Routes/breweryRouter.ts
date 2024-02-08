import { Router } from 'express';
import { BreweryController } from '../controller/breweryController';

export class BreweryRoutes {
  public router: Router;
  private breweryController: BreweryController;

  constructor() {
    this.breweryController = new BreweryController();
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.get('/', this.breweryController.getAllBreweries);
  }
}
