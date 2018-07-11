// const Joi = require('joi');

require('dotenv').config();

// const envVarsSchema = Joi.object({
//
//   NODE_ENV: Joi.string()
//     .allow(['development', 'production', 'test', 'provision'])
//     .default('development'),
//   PORT: Joi.number()
//     .default(9999),
//   MONGO_HOST: Joi.string()
//     .required()
//     .description('Mongo DB host url'),
//   MONGO_PORT: Joi.number()
//     .default(27017)
// }).unknown()
//   .required();
//
// const { err, value: envVars } = Joi.validate(process.env, envVarsSchema);
// if (err) {
//   throw new Error(`Config validation error: ${err.message}`);
// }
//
//
// const config = {
//   env: envVars.NODE_ENV,
//   port: envVars.PORT,
//   mongo: {
//     host: envVars.MONGO_HOST,
//     port: envVars.MONGO_PORT
//   }
// };

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  mongo: {
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT
  }
};

module.exports = config;
