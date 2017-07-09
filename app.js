const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(process.env.PORT || 3333, function(){
  console.log('server is running!')
})
