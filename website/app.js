var express = require('express');
var app = express();

app.use(express.json());

app.use('/', (req, res) => {
    res.send({ success: true, headers: req.headers });
});

app.listen(3000, () => console.log('Website is up'));
