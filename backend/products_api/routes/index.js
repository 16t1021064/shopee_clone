var express = require('express');
var router = express.Router();
var cors = require('cors');
const { Pool } = require('pg')
router.use(cors());
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Selling_book_store',
  password: '123',
  port: 5432,
})
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/products', function (req, res, next) {
  pool.query('SELECT * from "Products" order by id desc', (err, resp) => {
    if (err) {
      console.log(err);
    } else {
      res.send(resp.rows);
    }
  })


});
router.post('/products', function (req, res, next) {
  const { q } = req.body;
  console.log(q);
  let query = '';
  query = `%${q}%`;
  pool.query('SELECT * from "Products"  where name like $1 order by id desc', [query], (err, resp) => {
    if (err) {
      console.log(err);
    } else {
      res.send(resp.rows);
    }
  })
});
module.exports = router;
