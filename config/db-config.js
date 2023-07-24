module.exports.development = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "1717",
  DB: "postgres",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports.production = {
  USER: "assetdb_user",
  DB: "assetdb",
  HOST: "dpg-civ515h5rnuhcnqilg0g-a.singapore-postgres.render.com",
  dialect: "postgres",
};
