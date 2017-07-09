const express = require('express')
const app = express()
const search = require("./scripts/meetupAPI")

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/authd.ejs', function (req, res) {
  var result = search.findGroupByTerms('ruby')
  res.render('authd', {result})
})

app.listen(process.env.PORT || 3333, function(){
  console.log('server is running!')
})
