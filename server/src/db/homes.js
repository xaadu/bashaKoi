const mysql = require('mysql')

const pool = mysql.createPool({
    user: 'root',
    password: '',
    host: 'localhost',
    port: '3306',
    database: 'bashakoi'
})

const homes = {}

homes.all = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * from home`, (err, result) => {
            if (err) {
                return reject(err)
            }
            return resolve(result)
        })
    })
}

module.exports = homes
