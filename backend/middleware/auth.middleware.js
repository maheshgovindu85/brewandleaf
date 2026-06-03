
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticate = (allowedRoles = []) => {
  return (req, res, next) => {
    try {
      const authHeader = req.headers['authorization'];
      if (!authHeader) {
        return res.status(401).json({ success: false, message: 'Authorization header missing' });
      }

      const token = authHeader.split(' ')[1];
      if (!token) {
        return res.status(401).json({ success: false, message: 'Token missing' });
      }
      jwt.verify(token, process.env.JWT_SECRET, { algorithms: ['HS256'] }, (err, decoded) => {
        if (err) {
          
          return res.status(401).json({ success: false, message: 'Invalid token' });
        }
        if (allowedRoles.length > 0 && !allowedRoles.includes(decoded.role)) {
          return res.status(403).json({ success: false, message: 'Insufficient permissions' });
        }
        req.user = decoded; 
        next();
      });
    } catch (error) {
      console.error('Auth Middleware Error:', error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  };
};




module.exports = {
  
  verifyToken: authenticate([]),
  
  
  isAdmin: authenticate(['admin']),
  
  
  isEmployee: authenticate(['employee']),
  
  
  isAdminOrEmployee: authenticate(['admin', 'employee'])
};