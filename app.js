const express = require('express');
const mongoose = require('mongoose');
const app = express();
const mongodb = 'mongodb+srv://gillero:1218gil1998@cluster0.l2sxv.mongodb.net/item-database?retryWrites=true&w=majority';
app.set('view engine', 'ejs');
app.listen(3000);
mongoose.connect(mongodb).then( () => console.log('Connected')).catch(err => console.log(err));

app.get('/', (req, res) => {
    const items = [
        { name: 'Celular', price: 1500},
        { name: 'Monitor', price: 500},
        { name: 'Controle XBOX', price: 200}
    ];
    res.render('index', {items});
});
app.get('/add', (req, res) => {
    res.render('add-item');
});

app.use((req, res) => {
    res.render('error');
});