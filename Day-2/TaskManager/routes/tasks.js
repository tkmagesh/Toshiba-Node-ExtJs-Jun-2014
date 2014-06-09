var express = require('express');
var router = express.Router();


function Task(taskName){
	this.id = new Date().getTime();
	this.name = taskName;
	this.isCompleted = true;
}

Task.prototype.toggleCompletion = function(){
	this.isCompleted = !this.isCompleted;
}


/* GET users listing. */
var tasks = [];

router.get('/', function(req, res) {
  res.render('tasks/index', {list : tasks});
});


router.post('/', function(req,res){
	var newTask = new Task(req.body.taskName);
	tasks.push(newTask);
	res.render('tasks/index', {list : tasks});
});

router.post('/toggleCompletion',function(req,res){
	var taskObj = JSON.parse(req.body);
	for(var i=0;i<tasks.length;i++){
		if (tasks[i].id === taskObj.id){
			tasks[i].toggleCompletion();
			res.send(JSON.stringify(tasks[i]));
			break;
		}
	
	};

});




module.exports = router;
