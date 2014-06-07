var fs = require("fs");
var url = require("url");
var path = require("path");

require("http").createServer(function(req,res){
	var fileName = path.join(__dirname, url.parse(req.url).pathname);

	console.log("fileName = ", fileName);
	if (!fs.existsSync(fileName)){
		res.statusCode = 404;
		res.end();
		return;
	}
	var stream = fs.createReadStream(fileName, {encoding : "utf8", size : 20});
	stream.pipe(res);
}).listen(8080);

