const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath) );
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.listen(PORT, () => console.log('Servidor corriendo en el puerto ' + PORT));