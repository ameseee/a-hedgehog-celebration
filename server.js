const express = require('express');
var cors = require('cors');
const app = express();
const path = require('path');

const findHedgieImage = require('./scraper.js');

app.use(cors());
app.use(express.static(path.join(__dirname + '/public')));

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Hedgehog Celebration';

app.get('/', (request, response) => {
  response.send('Welcome to Hedgehog Celebration!');
});

app.get('/api/v1/hedgie_images/:keyword', (request, response) => {
  var keyword = request.params.keyword;
  console.log(keyword, "in endpoint");

  async function getHedgies() {
    const hedgieImages =  await findHedgieImage(keyword);
    response.json({ hedgieImages })
  }

  getHedgies()
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});
