// level 1
const showdata = require('./showdata')
const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (req, resp) => {
  return resp.render('index', { showdata })
})

app.get('/season/:id', (req, resp) => {
  const season = showdata.seasons.find((sson) => sson.number === parseInt(req.params.id))

  return resp.render('season', { showdata, season })
})

app.all('*', (req, resp) => {
  resp.sendStatus(404)
})

app.listen(3010, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3010, http://localhost:3010/')
})
