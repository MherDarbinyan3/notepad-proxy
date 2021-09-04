import { default as OverloadProtection } from 'overload-protection';
import { default as PinoExpressLogger } from 'express-pino-logger';
import { server } from './server';
import logger from '../logger';

const express = require('express');

const PORT = process.env.PORT || 8001;
const app = express();

server.applyMiddleware({ app, path: '/api' });

app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
  console.log(`Try your health check at: http://localhost:${PORT}/.well-known/apollo/server-health`);
});

const overloadProtectionConfig = {
  production: process.env.NODE_ENV === 'production',
  clientRetrySecs: 0,
  sampleInterval: 5,
  maxEventLoopDelay: 100,
  maxHeapUsedBytes: 0,
  maxRssBytes: 0,
  errorPropagationMode: false,
};

app.use(OverloadProtection('express', overloadProtectionConfig));

app.use(PinoExpressLogger({ logger }));
