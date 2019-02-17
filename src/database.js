// https://docs.google.com/spreadsheets/d/1CaFUUKzGBmvPBNGrtI7JjnoOF1yz63Lxr121RNSBq4o/edit#gid=1363498674

const mysql = require('mysql');
const { promisify } = require('util');
const { database } = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST' ) {
            console.error('DATABASE_CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if ( err.code === 'ECONNREFUSED' ) { 
            console.error('DATABASE CONNECTION WAS REFUSED')
        }
    }

    if ( connection ) connection.release();
    console.log('DB is Connected');
    return;
});

// Promisify Pool Query
pool.query = promisify(pool.query);

module.exports = pool;