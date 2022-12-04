let express = require('express');
let app = express();
const port = 5001; // where we will be loading/accessing our code

app.use(express.static('server/public')); // this serves up a static that has the index.html inside.
app.use(express.urlencoded());

const calculationList = require('./modules/calculationList');


app.listen(port, () => {
    console.log('listening on port, ', port);
}); // end of telling the application to listen to the port we defined above as 5001 and utilize node server we return


app.get('/calculations', function(req, res) {
    console.log('request for /calculations was made');
    res.send(calculationList);
} );


app.post('/calculations', function(req, res) {
    console.log('post request response', req.body);
    if (req.body.number1 && req.body.number2) {
        calculationList.push(req.body)
        res.sendStatus(201);
    } else {
        res.sendStatus(404);
    }
} );