let express = require('express');
let app = express();
const port = 5001; // where we will be loading/accessing our code

app.use(express.static('server/public')); // this serves up a static that has the index.html inside.
app.use(express.urlencoded());

const calculationList = require('./modules/calculationList');

app.listen(port, () => {
    console.log('listening on port, ', port);
}); // end of telling the application to listen to the port we defined above as 5001 and utilize node server we return