var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('signupLogin', { title: 'BroUps' });
});

router.get('/menu', function(req, res) {
  res.render('menu', { title: 'Main Menu' });
});

router.get('/createExercise', function(req, res) {
  res.render('createExercise', { title: 'Create Exercises' });
});

router.get('/history', function(req, res) {
  res.render('history', { title: 'Workout History' });
});

router.get('/stats', function(req, res) {
  res.render('stats', { title: 'Workout Stats' });
});

router.get('/preworkout', function(req, res) {
  res.render('preworkout', { title: 'Pre-Workout Summary'});
});

router.get('/workout', function(req, res) {
  res.render('workout', { title: 'Workout'});
});

router.get('/timer', function(req, res) {
  res.render('timer', {title: 'Rest Timer'})
});

router.get('/postworkout', function(req, res) {
  res.render('postworkout', { title: 'Workout Summary'});
});


module.exports = router;
