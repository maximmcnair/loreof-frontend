var express = require('express')
  , app = express()
  , port = 5230

app.get('/css/:filename', function(req, res){
  res.sendfile(__dirname + '/build/css/' + req.params.filename)
})
app.get('/images/:filename', function(req, res){
  res.sendfile(__dirname + '/build/images/' + req.params.filename)
})
app.get('/js/:filename', function(req, res){
  res.sendfile(__dirname + '/build/js/' + req.params.filename)
})
app.get('/partials/:filename', function(req, res){
  res.sendfile(__dirname + '/build/partials/' + req.params.filename)
})
app.get('/partials/components/:filename', function(req, res){
  res.sendfile(__dirname + '/build/partials/components/' + req.params.filename)
})

app.get('/*', function(req, res){
  res.sendfile(__dirname + '/build/index.html')
})

app.listen(port)
console.log('app running on ' + port)
