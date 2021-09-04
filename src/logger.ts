import { default as Pino } from 'pino';

const logger = Pino({
  name: process.env.APP_NAME,
  level: process.env.LOG_LEVEL || 'info',
  redact: {
    paths: ['req.headers.authorization'],
    remove: true
  }
});

export default logger;
