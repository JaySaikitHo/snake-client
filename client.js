const net = require('net');
const {host, port} = require('./constants')



const connect = function () {
  const conn = net.createConnection({
    host: host,
    port: port
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("successfully connected to game server");
    conn.write('Name: Jay');
    
    // setInterval(() => {conn.write("Move: up")}, 5000);
    // setInterval(() => {conn.write("Move: up")}, 5000);
    // setInterval(() => {conn.write("Move: right")}, 5000);
    // setInterval(() => {conn.write("Move: right")}, 5000);

    conn.on('data', (data) => {
      console.log('Message from client: ', data);
    });
  });







  return conn;
};


module.exports = { connect };