// const request = require("request")

console.log("HI")


var exports = module.exports = {}
let url = "https://api.meetup.com/"
// let token = window.location.hash.split("access_token=")[1].split("&")[0]
let token = "457dbc6f23ee699347c14eb248e9a782"
let numResults = '3'



exports.findGroupByTerms = (terms) => {
 terms = Array.isArray(terms) ? terms.join() : terms

request(`${url}find/groups?page=${numResults}&text=${terms}&access_token=${token}`, (error, response, body) => {
   if (!error && response.statusCode == 200) {
     let groups = JSON.parse(body)
     // console.log(data)
     // DO WHATEVER WE WANT WITH THE DATA HERE
     groups.forEach((group) => {
       console.log(`NAME: ${group.name}\nLINK: ${group.link}\n`)
     })
   } else {
     console.log(response.statusCode)
   }
 })
}
