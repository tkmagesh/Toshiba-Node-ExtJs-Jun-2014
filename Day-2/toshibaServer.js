var fs = require("fs");
var url = require("url");
var path = require("path");
var qs = require("querystring");
var staticServer = require("./staticResourceServer.js");
var bodyParser = require('./bodyParser.js');

require("http").createServer(function(req,res){
	if (!staticServer(req,res)){
		bodyParser(req,res,function(req,res){
			var resultData = {
				number1 : parseInt(req.data.number1,10),
				number2 : parseInt(req.data.number2,10),
				
			}
			resultData.result = resultData.number1 + resultData.number2;
			
			fs.readFile("calculator.html",{encoding : "utf8"}, function(err,fileContents){
				for(var key in resultData){
					var searchTerm = "{" + key + "}";
					var replaceData =  resultData[key];
					var regEx = new RegExp(searchTerm, "g");
					fileContents = fileContents.replace(regEx,replaceData);
				}
				res.write(fileContents);
				res.end();
			})
		});
	}

	/*	
	*/

}).listen(8080);

/*
function TaskRunner(){
	var tasks = [];

	this.addTask(task){
		//each task is nothing but a function with signature (req,res,next)
		if (tasks.length === 0){
			tasks.push(task);
		} else {
			var prevTask = tasks[tasks.length-1];
			var taskFn = function(req,res){
				prevTask(req,res,task)
				return task(req,res,prevTask)
			};
			tasks[tasks.length-1] = taskFn;
		}

	};
	this.run = function(){

		return function(req,res){

		}
	}
}

*/