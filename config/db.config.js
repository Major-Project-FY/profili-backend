import "dotenv/config";

export const development = {
  username: process.env.DEV_MAIN_DB_USER,
  password: process.env.DEV_MAIN_DB_PASSWORD,
  database: process.env.DEV_MAIN_DB_NAME,
  host: process.env.DEV_MAIN_DB_HOST,
  port: process.env.DEV_MAIN_DB_PORT,
  dialect: "postgres",
};

// export const development = {
//   username: "mayuresh",
//   password: "mayuresh",
//   database: "colax-dev",
//   host: "127.0.0.1",
//   port: 5432,
//   dialect: "postgres",
// };

export const test = {
  username: "root",
  password: null,
  database: "database_test",
  host: "127.0.0.1",
  dialect: "mysql",
};

export const production = {
  username: "root",
  password: null,
  database: "database_production",
  host: "127.0.0.1",
  dialect: "mysql",
};
