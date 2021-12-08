const router = require('express').Router();

// get request

router.get('/', (req, res) => {
  res.send('Hello world Programmers');
});

router.get('/hello', (req, res) => {
  //   res.send('We are here to welcome you');
  res.json({
    success: true,
    message: 'Welcome to the world of Programmers',
  });
});
module.exports = router;
