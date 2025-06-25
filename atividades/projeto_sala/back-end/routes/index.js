// Importa o Express
let express = require('express');
let router = express.Router();

// Rota principal
router.get('/', (req, res) => {
  res.render('index', {title: "Express"});
});

module.exports = router;
