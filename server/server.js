require('./config/config');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/usuario', function(req, res) {
    res.json('get usuario  ');
    // res.send('Hello World.. express')
});

//post crea nuevos registros
// paquete bodyparser para menejar parametros

app.post('/usuario', function(req, res) {

    let body = req.body;


    if (body.nombre === undefined) {
        // generalmente se usan los sig cod:
        // 200 ok// 201 created//400//401//403//forbidden..not found.. etc

        res.status(400).json({
            ok: false,
            mensaje: 'Se necesita el nombre de la persona'
        });
    } else {

        res.json({
            persona: body
        })
    }
});

//put actualiza  registros
app.put('/usuario/:id1', function(req, res) {

    let id = req.params.id1;
    res.json({ id });
    // res.json('put usuario  ');
});

// delete//cambia el estado
app.delete('/usuario', function(req, res) {
    res.json('delete usuario  ');
});

app.listen(process.env.PORT, () => {
    console.log('escuchando en el puerto', process.env.PORT);
})