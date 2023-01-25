const express = require('express'); 
const rutas = require('./routes/rutas');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/', rutas);

app.listen(process.env.PORT || 5000, () => { console.log('API Devs_Lutions'); });

module.exports = app;
