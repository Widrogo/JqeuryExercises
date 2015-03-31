var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(5400);

console.log("ingrese a los ejerccios en: \n");
console.log("localhost:5400");
