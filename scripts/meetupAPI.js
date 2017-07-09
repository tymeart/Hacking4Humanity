const request = require("request")
var exports = module.exports = {}
let url = "https://api.meetup.com/"
// running locally
let token = window.location.hash.split("access_token=")[1].split("&")[0]
// running on web server
// let token = window.location.hash.split("access_token=")[1].split("&")[0]
let numResults = '3'
exports.findGroupByTerms = (terms) => {
  console.log('the button works!')
  terms = Array.isArray(terms) ? terms.join() : terms
  request(`${url}find/groups?page=${numResults}&text=${terms}&access_token=${token}`, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      let groups = JSON.parse(body)
      // console.log(data)
      // DO WHATEVER WE WANT WITH THE DATA HERE
      //console.log(`NAME: ${group.name}\nLINK: ${group.link}\n`)


      // return (
      //   //<ul>
      //
      //     <% groups.forEach((group) => { %>
      //       <li><%= group.name %></li>
      //
      //     <%})%>
      //
      //   //</ul>
      // )

    } else {
      console.log(response.statusCode)
    }
  })
}
