import winston, {
  format,
  transports,
} from 'winston';

export const logger = winston.createLogger({
  level: (process.env.NODE_ENV === 'production') ? 'info' : 'debug',
  transports: [
    new transports.Console({
      format: format.combine(
        format.timestamp(),
        format.colorize(),
        format.simple(),
      ),
    })
  ],
  exitOnError: false,
});
