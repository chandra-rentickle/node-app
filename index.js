const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    console.log('Hello World!');
  res.send('Hello World!');
});

app.get('/rentickle', (req, res) => {
    console.log('Hello Rentickle!');
  res.send('Hello Rentickle!');
});

app.get('/rentickleio', (req, res) => {
  console.log('Hello Rentickle!');
res.send('Hello Rentickle! IO');
});

app.listen(port, () => {
  console.log(`Node app listening at http://localhost:${port}`);
});

