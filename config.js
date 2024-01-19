require('dotenv').config();

export default {
  host: process.env.MYSQL_ADDON_HOST || '',
  user: process.env.MYSQL_ADDON_USER || '',
  password: process.env.MYSQL_ADDON_PASSWORD || '',
  database: process.env.MYSQL_ADDON_DB || '',
};