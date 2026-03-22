const db   = require('../config/db');
const worklog={
    getAll: (callback) => {
        db.query('SELECT * FROM worklogs', callback); 
}
    };
module.exports = worklog;