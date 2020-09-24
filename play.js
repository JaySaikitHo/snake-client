const { connect } = require('./client');
const { setupInput} = require('./input')

/**
 * Establishes connection with the game server
 */


console.log('Connecting ...');
let conn = connect();
setupInput(conn);

