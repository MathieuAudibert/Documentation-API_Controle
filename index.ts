import express, { Application } from 'express';
import { BreweryRoutes } from './routes/breweryRoutes';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './utils/swagger.json';

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }

  private routes(): void {
    const breweryRoutes = new BreweryRoutes();
    this.app.use('/breweries', breweryRoutes.router);
  }

  public start(): void {
    const PORT = process.env.PORT || 3000;
    this.app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
}

new Server().start();
