const express = require('express');
var cors = require('cors');
const app = express();
const findHedgieImage = require('./scraper.js');

app.use(cors());
// app.use(express.static(path.join(__dirname + '/public')));

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Hedgie Fun';

app.get('/', (request, response) => {
  response.sendFile('index.html', {root: __dirname })
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
