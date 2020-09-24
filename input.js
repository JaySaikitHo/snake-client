let connection;
const { connect } = require('./client');
const { builtinModules } = require("module");

const handleUserInput = function(key){
  
  if(key === `\u0003`) {
    console.log("you are using the callback")
    process.exit()
  } 
}
const setupInput = function(conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  console.log("setup is being used")
  stdin.on('data',(key) => {
    if(key === "w") {
      conn.write("Move: up")
    } else if(key === "s"){
      conn.write("Move: down")
    } else if(key === "a"){
      conn.write("Move: left")
    } else if(key === "d"){
      conn.write("Move: right")    
    } else if(key === "q"){
      conn.write("Say: Hi!")
    }
   });
  return stdin; 
}
  



module.exports = {setupInput}