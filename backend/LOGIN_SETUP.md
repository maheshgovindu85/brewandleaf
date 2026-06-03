# Login Setup Guide

## Initial Setup

### 1. Set Admin Password
After your database is created, run the admin setup script to encrypt and set the password:

```bash
cd backend
node setup-admin.js
```

This will:
- Hash the password `admin@2026` using bcryptjs
- Create or update the admin user with encrypted password
- Display confirmation with credentials

### 2. Login Credentials
Once setup is complete, use these credentials to login:
- **Email**: `admin@brewandleaf.com`
- **Password**: `admin@2026`

## How to Login

### Frontend Login
1. Navigate to the login page in your Angular app
2. Enter the email: `admin@brewandleaf.com`
3. Enter the password: `admin@2026`
4. Click login button

### API Login (curl example)
```bash
curl -X POST http://localhost:YOUR_PORT/api/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@brewandleaf.com",
    "password": "admin@2026"
  }'
```

You'll receive a JWT token in response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "Admin",
    "email": "admin@brewandleaf.com",
    "role": "admin"
  }
}
```

## Security Details

- **Password Encryption**: Passwords are encrypted using bcryptjs with 10 salt rounds
- **JWT Token**: Valid for 24 hours
- **Token Usage**: Include token in Authorization header: `Authorization: Bearer <token>`

## Change Password (Future)
To change the admin password later, simply run:
```bash
node setup-admin.js
```
And update the password in the `setup-admin.js` file.
