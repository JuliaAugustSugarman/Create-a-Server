console.log('create a server project');

let express = require('express');

let app = express();

app.use(express.static('server/public'));

app.get('/', function (req, res) {
    res.send('/turtle');
});

app.listen(5000, function () {
    console.log('running on port 5000');

});