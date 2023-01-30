const mysql = require('mysql');

function conectar() {
    var config =
    {
        host     : 'pick-up.mysql.database.azure.com',
        user     : '*********',
        password : '*********',
        database : 'devs_lutions',
        port: 3306,
    };
    const db = new mysql.createConnection(config);
    db.connect(
        function (err) {
            if (err) {
                console.log("!!! Cannot connect !!! Error:");
                throw err;
            }
            else {
                console.log("Base de Datos conectada...");
            }
        });
    return db;
};

module.exports = {
    "conectar": conectar,
}
