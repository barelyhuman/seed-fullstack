import knex from 'knex';
import knexConfigs from '../knexfile';

const selectedConfig = knexConfigs[process.env.NODE_ENV || 'development'];

let client = null;

const connector = () => {
  // create a new client if it doesn't exist
  if (!client) {
    client = knex(selectedConfig);
  }

  return client;
};

export default connector;
