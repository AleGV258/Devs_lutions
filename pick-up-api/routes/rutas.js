var express = require('express');
var router = express.Router();
var database = require("../database/conexion.js");

router.get('/', function (req, res) {
    res.send('DEVS_LUTIONS_API   -   /pedidos    -    /usuarios    -    /locales   -   /articulos   -   /ubicaciones');
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

// INSERT UBICACIONES
router.get('/ubicaciones/insert/:Calle/:Numero/:Colonia/:Edificio_Privada/:Codigo_Postal', function (req, res) {
    var parametros = req.params;
    db = database.conectar();
    db.query("INSERT INTO ubicaciones(Calle, Numero, Colonia, Edificio_Privada, Codigo_Postal) VALUES(?, ?, ?, ?, ?);", [parametros.Calle, parametros.Numero, parametros.Colonia, parametros.Edificio_Privada, parametros.Codigo_Postal], (err, rows, fields) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200);
            res.json(rows);
        }
    })
    db.end(function (err) { err ? console.log(err) : console.log('Conexión finalizada'); });
});

// INSERT LOCALES
router.get('/locales/insert/:Nombre/:Telefono/:Sitio_Web/:Correo/:Horario/:Detalles/:Logo/:Id_ubicacion', function (req, res) {
    var parametros = req.params;
    db = database.conectar();
    db.query("INSERT INTO locales(Nombre, Telefono, Sitio_Web, Correo, Horario, Detalles, Logo, Id_ubicacion) VALUES(?, ?, ?, ?, ?, ?, ?, ?);", [parametros.Nombre, parametros.Telefono, parametros.Sitio_Web, parametros.Correo, parametros.Horario, parametros.Detalles, parametros.Logo, parametros.Id_ubicacion], (err, rows, fields) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200);
            res.json(rows);
        }
    })
    db.end(function (err) { err ? console.log(err) : console.log('Conexión finalizada'); });
});

// INSERT PEDIDOS
router.get('/pedidos/insert/:ID_Usuario/:ID_Articulo/:Total/:Tiempo_Estimado/:Status/:Id_Local', function (req, res) {
    var parametros = req.params;
    db = database.conectar();
    db.query("INSERT INTO pedidos(ID_Usuario, ID_Articulo, Total, Tiempo_Estimado, Status, Id_Local) VALUES(?, ?, ?, ?, ?, ?);", [parametros.ID_Usuario, parametros.ID_Articulo, parametros.Total, parametros.Tiempo_Estimado, parametros.Status, parametros.Id_Local], (err, rows, fields) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200);
            res.json(rows);
        }
    })
    db.end(function (err) { err ? console.log(err) : console.log('Conexión finalizada'); });
});

// INSERT USUARIOS
router.get('/usuarios/insert/:Nombre/:Apellidos/:Correo/:Contrasena/:Edad/:Genero/:Telefono/:Pago_Preferido/:Foto', function (req, res) {
    var parametros = req.params;
    db = database.conectar();
    db.query("INSERT INTO usuarios(Nombre, Apellidos, Correo, Contrasena, Edad, Genero, Telefono, Pago_Preferido, Foto) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?);", [parametros.Nombre, parametros.Apellidos, parametros.Correo, parametros.Contrasena, parametros.Edad, parametros.Genero, parametros.Telefono, parametros.Pago_Preferido, parametros.Foto], (err, rows, fields) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200);
            res.json(rows);
        }
    })
    db.end(function (err) { err ? console.log(err) : console.log('Conexión finalizada'); });
});

// INSERT ARTICULOS
router.get('/articulos/insert/:Nombre/:Detalles/:Precio/:Imagen', function (req, res) {
    var parametros = req.params;
    db = database.conectar();
    db.query("INSERT INTO articulos(Nombre, Detalles, Precio, Imagen) VALUES(?, ?, ?, ?);", [parametros.Nombre, parametros.Detalles, parametros.Precio, parametros.Imagen], (err, rows, fields) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200);
            res.json(rows);
        }
    })
    db.end(function (err) { err ? console.log(err) : console.log('Conexión finalizada'); });
});

// DELETE UBICACIONES
router.get('/ubicaciones/delete/:ID_Ubicacion', function (req, res) {
    var parametros = req.params;
    db = database.conectar();
    db.query("DELETE FROM ubicaciones WHERE ID_Ubicacion = ?;", [parametros.ID_Ubicacion], (err, rows, fields) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200);
            res.json(rows);
        }
    })
    db.end(function (err) { err ? console.log(err) : console.log('Conexión finalizada'); });
});

// DELETE LOCALES
router.get('/locales/delete/:ID_Local', function (req, res) {
    var parametros = req.params;
    db = database.conectar();
    db.query("DELETE FROM locales WHERE ID_Local = ?;", [parametros.ID_Local], (err, rows, fields) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200);
            res.json(rows);
        }
    })
    db.end(function (err) { err ? console.log(err) : console.log('Conexión finalizada'); });
});

// DELETE PEDIDOS
router.get('/pedidos/delete/:Id_Pedido', function (req, res) {
    var parametros = req.params;
    db = database.conectar();
    db.query("DELETE FROM pedidos WHERE Id_Pedido = ?;", [parametros.Id_Pedido], (err, rows, fields) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200);
            res.json(rows);
        }
    })
    db.end(function (err) { err ? console.log(err) : console.log('Conexión finalizada'); });
});

// DELETE USUARIOS
router.get('/usuarios/delete/:ID_Usuario', function (req, res) {
    var parametros = req.params;
    db = database.conectar();
    db.query("DELETE FROM usuarios WHERE ID_Usuario = ?;", [parametros.ID_Usuario], (err, rows, fields) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200);
            res.json(rows);
        }
    })
    db.end(function (err) { err ? console.log(err) : console.log('Conexión finalizada'); });
});

// DELETE ARTICULOS
router.get('/articulos/delete/:ID_Articulo', function (req, res) {
    var parametros = req.params;
    db = database.conectar();
    db.query("DELETE FROM articulos WHERE ID_Articulo = ?;", [parametros.ID_Articulo], (err, rows, fields) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200);
            res.json(rows);
        }
    })
    db.end(function (err) { err ? console.log(err) : console.log('Conexión finalizada'); });
});

// UPDATE UBICACIONES
router.get('/ubicaciones/update/:Calle/:Numero/:Colonia/:Edificio_Privada/:Codigo_Postal/:ID_Ubicacion', function (req, res) {
    var parametros = req.params;
    db = database.conectar();
    db.query("UPDATE ubicaciones SET Calle = ?, Numero = ?, Colonia = ?, Edificio_Privada = ?, Codigo_Postal = ? WHERE ID_Ubicacion = ?;", [parametros.Calle, parametros.Numero, parametros.Colonia, parametros.Edificio_Privada, parametros.Codigo_Postal, parametros.ID_Ubicacion], (err, rows, fields) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200);
            res.json(rows);
        }
    })
    db.end(function (err) { err ? console.log(err) : console.log('Conexión finalizada'); });
});

// UPDATE LOCALES
router.get('/locales/update/:Nombre/:Telefono/:Sitio_Web/:Correo/:Horario/:Detalles/:Logo/:Id_ubicacion/:ID_Local', function (req, res) {
    var parametros = req.params;
    db = database.conectar();
    db.query("UPDATE locales SET Nombre = ?, Telefono = ?, Sitio_Web = ?, Correo = ?, Horario = ?, Detalles = ?, Logo = ?, Id_ubicacion = ? WHERE ID_Local = ?;", [parametros.Nombre, parametros.Telefono, parametros.Sitio_Web, parametros.Correo, parametros.Horario, parametros.Detalles, parametros.Logo, parametros.Id_ubicacion, parametros.ID_Local], (err, rows, fields) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200);
            res.json(rows);
        }
    })
    db.end(function (err) { err ? console.log(err) : console.log('Conexión finalizada'); });
});

// UPDATE PEDIDOS
router.get('/pedidos/update/:ID_Usuario/:ID_Articulo/:Total/:Tiempo_Estimado/:Status/:Id_Local/:Id_Pedido', function (req, res) {
    var parametros = req.params;
    db = database.conectar();
    db.query("UPDATE pedidos SET ID_Usuario = ?, ID_Articulo = ?, Total = ?, Tiempo_Estimado = ?, Status = ?, Id_Local = ? WHERE Id_Pedido = ?;", [parametros.ID_Usuario, parametros.ID_Articulo, parametros.Total, parametros.Tiempo_Estimado, parametros.Status, parametros.Id_Local, parametros.Id_Pedido], (err, rows, fields) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200);
            res.json(rows);
        }
    })
    db.end(function (err) { err ? console.log(err) : console.log('Conexión finalizada'); });
});

// UPDATE USUARIOS
router.get('/usuarios/update/:Nombre/:Apellidos/:Correo/:Contrasena/:Edad/:Genero/:Telefono/:Pago_Preferido/:Foto/:ID_Usuario', function (req, res) {
    var parametros = req.params;
    db = database.conectar();
    db.query("UPDATE usuarios SET Nombre = ?, Apellidos = ?, Correo = ?, Contrasena = ?, Edad = ?, Genero = ?, Telefono = ?, Pago_Preferido = ?, Foto = ? WHERE ID_Usuario = ?;", [parametros.Nombre, parametros.Apellidos, parametros.Correo, parametros.Contrasena, parametros.Edad, parametros.Genero, parametros.Telefono, parametros.Pago_Preferido, parametros.Foto, parametros.ID_Usuario], (err, rows, fields) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200);
            res.json(rows);
        }
    })
    db.end(function (err) { err ? console.log(err) : console.log('Conexión finalizada'); });
});

// UPDATE ARTICULOS
router.get('/articulos/update/:Nombre/:Detalles/:Precio/:Imagen/:ID_Articulo', function (req, res) {
    var parametros = req.params;
    db = database.conectar();
    db.query("UPDATE articulos SET Nombre = ?, Detalles = ?, Precio = ?, Imagen = ? WHERE ID_Articulo = ?;", [parametros.Nombre, parametros.Detalles, parametros.Precio, parametros.Imagen, parametros.ID_Articulo], (err, rows, fields) => {
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
