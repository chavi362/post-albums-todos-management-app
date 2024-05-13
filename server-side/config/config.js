const config = {}
config.port =  process.env.NODE_PORT;
config.node_env = process.env.NODE_ENV;
config.db_host = process.env.DB_HOST;
config.db_password = process.env.DB_PASSWORD;


module.exports = config;
