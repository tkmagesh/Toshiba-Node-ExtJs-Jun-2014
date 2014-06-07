var express = require('express');
var router = express.Router();

/* GET users listing. */
var tasks = ['Task - 1', 'Task - 2', 'Task -3'];

router.get('/', function(req, res) {
  res.render('tasks/index', {list : tasks});
});

router.get('/data', function(req, res) {
  res.end(JSON.stringify(tasks));
});

router.post('/', function(req,res){
	tasks.push(req.body.taskName);
	res.render('tasks/index', {list : tasks});
})


module.exports = router;
