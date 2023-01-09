var express = require('express');
var router = express.Router();
var database = require("../database/conexion.js");


router.get('/', function (req, res) {
    res.send('DEVS_LUTIONS_API');
});

// SELECT USUARIOS
router.get('/usuarios', function (req, res) {
    db = database.conectar();
    db.query("SELECT * FROM usuarios;",
    function (err, rows, fields) {
        if (err) {
            console.log(err)
        } else {
            res.status(200);
            res.json(rows);
        }
    })
    db.end(function (err) { err ? console.log(err) : console.log('Conexión finalizada'); });
});

// SELECT ARTICULOS
router.get('/articulos', function (req, res) {
    db = database.conectar();
    db.query("SELECT * FROM articulos;",
    function (err, rows, fields) {
        if (err) {
            console.log(err)
        } else {
            res.status(200);
            res.json(rows);
        }
    })
    db.end(function (err) { err ? console.log(err) : console.log('Conexión finalizada'); });
});

// SELECT LOCALES
router.get('/locales', function (req, res) {
    db = database.conectar();
    db.query("SELECT * FROM locales;",
    function (err, rows, fields) {
        if (err) {
            console.log(err)
        } else {
            res.status(200);
            res.json(rows);
        }
    })
    db.end(function (err) { err ? console.log(err) : console.log('Conexión finalizada'); });
});

// SELECT PEDIDOS
router.get('/pedidos', function (req, res) {
    db = database.conectar();
    db.query("SELECT * FROM pedidos;",
    function (err, rows, fields) {
        if (err) {
            console.log(err)
        } else {
            res.status(200);
            res.json(rows);
        }
    })
    db.end(function (err) { err ? console.log(err) : console.log('Conexión finalizada'); });
});

// SELECT UBICACIONES
router.get('/ubicaciones', function (req, res) {
    db = database.conectar();
    db.query("SELECT * FROM ubicaciones;",
    function (err, rows, fields) {
        if (err) {
            console.log(err)
        } else {
            res.status(200);
            res.json(rows);
        }
    })
    db.end(function (err) { err ? console.log(err) : console.log('Conexión finalizada'); });
});

module.exports = router;
