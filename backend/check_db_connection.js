const mysql = require('mysql2');
require('dotenv').config();

const connectionConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
};

console.log('Testing connection with:');
console.log('Host:', connectionConfig.host);
console.log('User:', connectionConfig.user);
console.log('Password:', connectionConfig.password ? '**** (HIDDEN)' : '(EMPTY)');

const connection = mysql.createConnection(connectionConfig);

connection.connect((err) => {
  if (err) {
    if (err.code === 'ER_ACCESS_DENIED_ERROR') {
      console.error('\n❌ ERROR: Incorrect Password or Username.');
      console.error('The password you provided in .env does not match your MySQL root password.');
    } else {
      console.error('\n❌ ERROR:', err.message);
    }
    process.exit(1);
  } else {
    console.log('\n✅ SUCCESS: Connected to MySQL server!');
    
    const dbName = process.env.DB_NAME || 'brew_and_leaf_db';
    connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``, (err) => {
      if (err) {
        console.error(`❌ Could not create/access database "${dbName}":`, err.message);
      } else {
        console.log(`✅ Database "${dbName}" is ready.`);
      }
      connection.end();
      process.exit(0);
    });
  }
});
