const express = require("express");

require('dotenv').config();

const { getConnection } = require('./../database/dbConfig')

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.ticketPath = '/api/tickets';

    this.connectionDB();

    this.app.use( express.json() );

    this.routes();
  }

  routes() {
    this.app.use(this.ticketPath, require('../routes/tickets'))
  }

  async connectionDB() {
    await getConnection()
  }

  listen() {
    this.app.listen( this.port, () => {
        console.log('Server running on port' , this.port)
    })
  }
}

module.exports = Server;
