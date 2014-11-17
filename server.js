var express = require('express')
  , app = express()
  , port = 5230

var app = module.exports = express();

app.use(express.static('build'))

app.get('/*', function(req, res){
  res.sendFile(__dirname + '/build/index.html')
})

app.listen(port)
console.log('app running on ' + port)