var express = require(`express`);
var router = express.Router();

var burger = require(`../models/burger.js`);

router.get(`/`, (req, res) => {
  burger.all(data => {
    var hbsObject = {
      burger: data
    };
    res.render(`index`, hbsObject);
  });
});

router.post(`/api/burgers`, (req, res) => {
  burger.create([`burger_name`], [req.body.name], result => {
    res.json({ id: result.insertId });
  });
});

router.put(`/api/burgers/:id`, (req, res) => {
  var condition = `id = ${ req.params.id }`;
  var badRequest = 400;
  var okRequest = 200;

  burger.update(
    { devoured: req.body.devoured },
    condition,
    result => {
      if (result.changedRows === 0) {
        return res.status(badRequest).end();
      } else {
        res.status(okRequest).end();
      }
    }
  );
});

router.delete(`/api/burgers/:id`, (req, res) => {
  var condition = `id = ${ req.params.id }`;
  var serverError = 404;
  var okRequest = 200;

  burger.delete(condition, result => {
    if (result.affectedRows === 0) {
      return res.status(serverError).end();
    } else {
      res.status(okRequest).end();
    }
  });
});

module.exports = router;