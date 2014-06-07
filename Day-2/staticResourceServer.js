var fs = require("fs");
var url = require("url");
var path = require("path");

function serveStatic(req,res,next){
	var urlObj = url.parse(req.url);
	var fileName = path.join(__dirname, urlObj.pathname);
	//console.log("fileName = ", fileName);
	var isStatic = isStaticResource(fileName);
	if (isStatic){
		if (!fs.existsSync(fileName)){
			res.statusCode = 404;
			res.end();
			return;
		}

		var stream = fs.createReadStream(fileName, {encoding : "utf8", size : 20});
		stream.pipe(res);
	}
	/*if (typeof next === "function"){
		next()
	}*/
	return isStatic;
}

function isStaticResource(pathName){
	var staticExtensions = [".html",".js",".css",".jpg",".ico"];
	for(var i=0;i<staticExtensions.length;i++){
		if (isEndsWith(pathName,staticExtensions[i])){
			return true;
			break;
		}
	}
	return false;
}

function isEndsWith(pathName,ext){
	return pathName.substr(pathName.length - ext.length, ext.length) === ext;
}

module.exports = serveStatic;
