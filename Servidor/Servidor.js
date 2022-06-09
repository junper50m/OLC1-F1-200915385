

const express = require("express");
const bodyParser = require('body-parser');
const app = express();

var puerto = process.env.PORT || 3000  

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


let data = {
 nombre:'',
 apellido: ''
};


app.route('/data')

 .get(function (req, res) {
  respuesta = {
   mensaje: 'Inicio Get'
  };
  res.send(respuesta);
 })
 
 .post(function (req, res) {
  
	
	data = {
     nombre: req.body.nombre,
     apellido: req.body.apellido
    };
  
  respuesta = {
	mensaje: 'Agregar Post '+ data.nombre + ' ' + data.apellido
  };
  
  res.send(respuesta);
 })
 
 .put(function (req, res) {
	 

    data = {
     nombre: req.body.nombre,
     apellido: req.body.apellido
    };
   respuesta = {
	mensaje: 'Actualizar Put'
  };
  
  res.send(respuesta);
  
 })
 
 .delete(function (req, res) {
  
   data = { 
    nombre: '', 
    apellido: '' 
   };
  respuesta = {
	mensaje: 'Eliminar Delete'
  };
  res.send(respuesta);
 });
 
app.use(function(req, res, next) {
 respuesta = {
  mensaje: 'URL no encontrada'
 };
 res.status(404).send(respuesta);
});


app.listen(puerto, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

