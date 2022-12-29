import express from 'express';
import swaggerUI from 'swagger-ui-express';

import { createConnection } from './database';
import { router } from './routes';
import swaggerFile from './swagger.json';

import './shared/container';

createConnection();

const app = express();

app.use(express.json());

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.listen(8080, () => console.log('server is running on port 8080 🚀'));
