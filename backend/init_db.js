const mysql = require('mysql2/promise');
require('dotenv').config();
const fs = require('fs');
const path = require('path');

async function initializeDatabase() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });

  console.log('Connected to MySQL server.');

  try {
    // Read SQL file
    const sqlPath = path.join(__dirname, 'brew_and_leaf.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');

    // Split SQL by semicolon and filter out empty strings
    const queries = sql
      .split(';')
      .map(q => q.trim())
      .filter(q => q.length > 0);

    console.log(`Executing ${queries.length} queries from brew_and_leaf.sql...`);

    for (const query of queries) {
      await connection.query(query);
    }

    console.log('✅ Database and tables initialized successfully!');
  } catch (error) {
    console.error('❌ Error initializing database:', error.message);
  } finally {
    await connection.end();
    process.exit();
  }
}

initializeDatabase();
