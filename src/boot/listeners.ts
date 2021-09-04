import logger from '../logger';

const PORT = process.env.PORT || 8001;

function onHealthCheck(): Promise<void> {
  return new Promise(resolve => {
    resolve();
  });
}

function onListening(): void {
  logger.info(`Listening on port ${PORT}.`);
}

function onSignal(): Promise<void> {
  logger.info('Starting server shutdown.');
  return new Promise(resolve => {
    resolve();
  });
}

function onShutdown(): Promise<void> {
  logger.info('Ready. Shutting down.');
  return new Promise(resolve => {
    resolve();
  });
}

function onError(error: Error): void {
  throw error;
}

export {
  onHealthCheck,
  onListening,
  onSignal,
  onShutdown,
  onError,
};
