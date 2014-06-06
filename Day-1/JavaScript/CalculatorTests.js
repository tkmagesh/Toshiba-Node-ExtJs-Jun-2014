function calculatorTests(){
	test("Should be able to add two numbers", function(){
		//Arrange
		var number1 = 10,
			number2 = 20,
			expectedResult = 30;

		//Act
		var result = add(number1,number2);

		//Assert
		return result === expectedResult;
	});
	test("Should be able to add two numbers in string format", function(){
		//Arrange
		var number1 = "10",
			number2 = "20",
			expectedResult = 30;

		//Act
		var result = add(number1,number2);

		//Assert
		return result === expectedResult;
	});
	test("Should be able to treat non numberic data as zero", function(){
		//Arrange
		var number1 = "abc",
			number2 = 20,
			expectedResult = 20;

		//Act
		var result = add(number1,number2);

		//Assert
		return result === expectedResult;
	});
	test("Should be able to add functions returning numbers", function(){
		//Arrange
		var f1 = function(){ return 10;},
			f2 = function(){ return 20;},
			expectedResult = 30;
		

		//Act
		var result = add(f1,f2);

		//Assert
		return result === expectedResult;
	});
	test("Should be able to add functions returning numbers in string format", function(){
		//Arrange
		var f1 = function(){ return "10";},
			f2 = function(){ return "20";},
			expectedResult = 30;
		

		//Act
		var result = add(f1,f2);

		//Assert
		return result === expectedResult;
	});
	test("Should be able to add only one number", function(){
		//Arrange
		var n1 = 10;
			expectedResult = 10;
		

		//Act
		var result = add(n1);

		//Assert
		return result === expectedResult;
	});
	test("Should be able to add variable length of arguments", function(){
		//Arrange
		var expectedResult = 100;
		

		//Act
		var result = add(10,20,30,40);

		//Assert
		return result === expectedResult;
	});
	test("Should be able to add array of numbers", function(){
		//Arrange
		var numbers1 = [10,20],
			numbers2 = [30,40],
			expectedResult = 100;
		

		//Act
		var result = add(numbers1,numbers2);

		//Assert
		return result === expectedResult;
	});
	test("Should be able to add array of numbers in string format", function(){
		//Arrange
		var numbers1 = [10,"20"],
			numbers2 = [30,"40"],
			expectedResult = 100;
		

		//Act
		var result = add(numbers1,numbers2);

		//Assert
		return result === expectedResult;
	});
	test("Should be able to add nested array of numbers", function(){
		//Arrange
		var numbers=[10,[20,[30,[40]]]],
			expectedResult = 100;
		

		//Act
		var result = add(numbers);

		//Assert
		return result === expectedResult;
	});
	test("Should be able to add functions returning array of numbers", function(){
		//Arrange
		var f1 = function(){ return [10,20];},
			f2 = function(){ return [30,40];},
			expectedResult = 100;
		

		//Act
		var result = add(f1,f2);

		//Assert
		return result === expectedResult;
	});
	test("Should be able to add array of functions returning array of numbers", function(){
		//Arrange
		var f1 = function(){ return [10,20];},
			f2 = function(){ return [30,40];},
			expectedResult = 100;
		

		//Act
		var result = add([f1,f2]);

		//Assert
		return result === expectedResult;
	});
}