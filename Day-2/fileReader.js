var fs = require("fs");
fs.readFile("test.txt",{encoding : "utf8"}, function(err,data){
	console.log(data);
});
