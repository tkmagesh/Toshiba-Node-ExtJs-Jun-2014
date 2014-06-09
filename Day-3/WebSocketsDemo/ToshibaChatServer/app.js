var ws = require("nodejs-websocket");
var server = ws.createServer(function(con){
	console.log('A new connection is established');
	var timer = 0;
	con.on("text",function(data){
		/*if (data === "start"){
			timer = setInterval(function(){
				con.sendText(new Date().toString())
			},10000);
		} else {
			clearInterval(timer);
		}*/
		server.connections.forEach(function(c){
			c.sendText(data);
		});
	});
});
server.listen(9090);
console.log("socket server running on port 9090...");