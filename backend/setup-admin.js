const db = require('./config/db');
const bcrypt = require('bcryptjs');

const adminEmail = 'admin@brewandleaf.com';
const adminPassword = 'admin@2026';
const adminUsername = 'Admin';
// node setup-admin.js commond to create or update admin user with default credentials. You can change the email and password as needed.

// Hash the password
bcrypt.hash(adminPassword, 10, (err, hashedPassword) => {
    if (err) {
        console.error('Error hashing password:', err);
        process.exit(1);
    }

    // First, check if admin exists
    db.query('SELECT * FROM users WHERE email = ?', [adminEmail], (err, results) => {
        if (err) {
            console.error('Error checking admin:', err);
            process.exit(1);
        }

        if (results.length > 0) {
            // Update existing admin
            db.query(
                'UPDATE users SET password = ? WHERE email = ?',
                [hashedPassword, adminEmail],
                (err, result) => {
                    if (err) {
                        console.error('Error updating admin:', err);
                        process.exit(1);
                    }
                    console.log('✓ Admin password updated successfully!');
                    console.log(`Email: ${adminEmail}`);
                    console.log(`Password: ${adminPassword}`);
                    console.log('\nAdmin is ready to login!');
                    process.exit(0);
                }
            );
        } else {
            // Insert new admin
            db.query(
                'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)',
                [adminUsername, adminEmail, hashedPassword, 'admin'],
                (err, result) => {
                    if (err) {
                        console.error('Error creating admin:', err);
                        process.exit(1);
                    }
                    console.log('✓ Admin user created successfully!');
                    console.log(`Email: ${adminEmail}`);
                    console.log(`Password: ${adminPassword}`);
                    console.log('\nAdmin is ready to login!');
                    process.exit(0);
                }
            );
        }
    });
});
