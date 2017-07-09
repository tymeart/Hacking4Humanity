const express = require('express')
const app = express()
const search = require("./scripts/meetupAPI")
const url = require('url')

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/authd', function (req, res) {

  //let token = req.originalUrl.split("access_token=")[1].split("&")[0]
  var fragment = url.parse(req.url).href
  //let token = window.location.hash.split("access_token=")[1].split("&")[0]
  //var result = search.findGroupByTerms('RUBY')

  // res.render('authd', {result})
  res.render('authd', {result: fragment})
})

app.listen(process.env.PORT || 3333, function(){
  console.log('server is running!')
})
