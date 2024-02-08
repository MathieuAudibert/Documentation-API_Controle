import path from 'path';

export const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Open Brewery DB API',
      version: '1.0.0',
      description: 'Documentation de l\'API Open Brewery DB',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Serveur local',
      },
    ],
  },
  apis: [path.resolve(__dirname, './controller/*.ts')], 
};
