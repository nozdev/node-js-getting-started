const express = require('express')
const path = require('path')
const { Pool } = require('pg')
const PORT = process.env.PORT || 5000
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index')
      .get('/db', async (req, res) => {
    try {

      res.render('pages/db', null );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  }))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
