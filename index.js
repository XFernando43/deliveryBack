const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(cors());
app.disable('x-powered-by');
app.set('port', port);

app.get('/', (req, res) => {
    res.send('Ruta raíz del backend');
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

const host = '192.168.0.12' || 'localhost';
server.listen(port, host, function() {
    console.log(`Aplicación corriendo en: http://${host}:${port}`);
});
