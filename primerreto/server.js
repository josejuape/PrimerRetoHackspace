var express = require('express');
var faker = require('faker');
var _ = require('lodash');

var app = express();

var generarPosts = function(){
  var randomId = faker.random.uuid();
  var randomName = faker.name.findName();
  var randomEmail = faker.internet.email();
  var randomTitulo = faker.name.title();
  var randomContenido = faker.lorem.paragraph();
  var randomFecha = faker.date.past();
  var randomImage = faker.image.avatar();
  return {
    id:randomId,
    nombre: randomName,
    email: randomEmail,
    titulo:randomTitulo,
    contenido:randomContenido,
    fecha:randomFecha,
    imagen: randomImage
  }

}

app.get('/', function (req, res) {
  res.send('Mi primer servidor!');
});

app.get('/posts', function (req, res) {
  var cantidad = _.random(10,20)
  var usuarios = _.times(cantidad, generarPosts)
  res.json(usuarios);
});

app.set('port',process.env.PORT || 3000);
var server = app.listen(app.get('port'),function(){
    console.log('Servidor express escuchando en el puerto: '+server.address().port);
});