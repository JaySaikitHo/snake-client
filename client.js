const net = require('net')


const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
      
  conn.on('connect', () => {
    console.log("successfully connected to game server")
    
      conn.write('Name: Jay')
      
  });
  
  conn.on('data', (data) => {
    console.log('Message from client: ', data)
    });
  
  
  return conn;
}

module.exports = {connect}