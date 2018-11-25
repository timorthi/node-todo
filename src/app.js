const express = require('express');

const app = express();
const port = 7000;

app.get('/', (req, res) => {
  res.send('Hello world!\n');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
