var express = require('express');
var request = require('request');
var app = express();
var cors = require('cors');

app.use(cors()); //allows overriding cross origin policy (use npm install if needed)

app.get('/testing', function(req, res){ // listens for request on /api route
 console.log('working!');
 res.send('working!'); // if no errors, send the body of data back to front end
});

/* PUT YOUR CODE BETWEEN COMMENTS */


app.get('/api', function(req, res){ // listens for request on /api route
  var lat = req.query.lat; // grabs lat and lng queries from the request object
  var lng = req.query.lng;
  var region = req.query.region;
  request('https://api.brewerydb.com/v2/location/?key=c380ced21d6eab9b00b3d58e2562af1b' + '&region=' + region, function (error, response, body) { // api url
    if (!error && response.statusCode === 200) {
      console.log('beer');
      res.send(body); // if no errors, send the body of data back to front end
    }
   });
});



/* PUT YOUR CODE ABOVE THIS COMMENT */

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Server running on port 3000');
