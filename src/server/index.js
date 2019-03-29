//Configure el "start" del package.json para inizializar desde express

//Declaro express para poder utilizarlo
var express = require("express");
var app = express();
//Declaro el puerto a usar
const port = process.env.PORT || 3001;

//Uso metodo USE en vez de GET porque funciona para todo
app.use(express.static('/api/frutas'));
//Probando emojisense
var welcome = "Bienvenido a EXPRESS 🖖";
var cars = [
  "Saab🚗",
  "Volvo 🚙",
  "BMW 🚓"
];

//Tirando fruta
const frutas = ["🥝", "🍎", "🍊 ", welcome];

app.get("/api/frutas", (req, res) => {
  res.json({
    frutas: frutas
  });
});

app.get("/", (req, res) => {
  res.json({
    cars: cars
  });
});

app.listen(port, function() {
  console.log("La app esta pegando en el puerto " + port);
});
