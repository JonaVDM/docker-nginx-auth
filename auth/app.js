const express = require('express');
const app = express();

// Auth route
app.get('/auth', function (req, res) {
  let token = req.header('x-token');

  if (token != 'secret') {
    res.send(401);

    return;
  }

  res.setHeader('x-username', 'Jona');
  res.setHeader('x-access-token', 'abc123');

  res.end();
});

app.listen(3000, () => console.log('Auth server is up'));
