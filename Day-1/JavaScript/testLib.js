	function test(title,testFn){
		var result = testFn();
		var newTestEle = document.createElement("li");
		newTestEle.innerHTML = title;
		newTestEle.classList.add(result ? "pass" : "fail");
		document.getElementById("ulTestList").appendChild(newTestEle);
	}