var qs = require("querystring");
function bodyParser(req,res,onCompletion){
	var dataAsString = '';
	req.on("data",function(chunk){
		dataAsString += chunk;
	});
	req.on("end",function(){
		var reqData = qs.parse(dataAsString);
		console.log(reqData);
		req.data = reqData;
		onCompletion(req,res);
	});

}
module.exports = bodyParser;