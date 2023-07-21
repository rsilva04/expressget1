let express = require('express');
let app = express();
let port = 3000;
app.use(express.json())

const quoteList = require('./quoteList')

app.use(express.static('server/public'));


//When we visit localhost
app.get('/quotes', function(req, res){
    console.log('Request for /quotes was made');

    res.send(quoteList)
})


app.listen(port, function() {
  console.log('listening on port', port);
});

//http://localhost:3000/quotes
//this is called Route, Path, and URL

//4 types of routes
//GET
//POST
//PUT
//DELTE
//CRUD - Create, Read, Uodate, Delete

// status codes
// 200 Ok - everything worked as expected
// 201 Created - a record was created without issue
// 400 Bad Request - something went wrong in your route
// 404 Not Found - you probably have the wrong adddress
// 500 Server Error - something bad happened on the server

