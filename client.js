// client.js
const net = require('net');
const constants = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: constants.IP,
    port: constants.PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    // when a connection is established
    console.log("Successfully connected to server...");
    conn.write('Name: KEV');
  });

  conn.on('data', (data) => {
    console.log('Incoming:', data);
  });

  return conn;
}

module.exports = connect;