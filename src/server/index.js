//Configure el "start" del package.json para inizializar desde express

//Declaro express para poder utilizarlo
var express = require('express');
var app = express();
//Declaro el puerto a usar
const port = 3000;

//Uso metodo USE en vez de GET porque funciona para todo
app.use('/', function (req, res) {
  res.send('Express');
});

app.listen(3000, function () {
  console.log('La app esta pegando en el puerto ' + port );
});
 
