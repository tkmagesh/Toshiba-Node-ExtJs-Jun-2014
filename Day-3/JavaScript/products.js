

var products = [
	{id : 1, name : "pen", cost : 90 , units : 9 , category : 1},
	{id : 6, name : "hen", cost : 40 , units : 3 , category : 2},
	{id : 3, name : "ten", cost : 20 , units : 8 , category : 1},
	{id : 9, name : "den", cost : 40 , units : 2 , category : 2},
	{id : 7, name : "zen", cost : 50 , units : 7 , category : 1},
	{id : 8, name : "ken", cost : 70 , units : 5 , category : 2}
]

//write a function that sorts the above collection by id

function sort(){
  for(var i=0;i<products.length-1;i++)
    for(var j=i+1;j<products.length;j++){
        var left = products[i], right = products[j];
        if (left.id > right.id){
            products[i] = products[j];
            products[j] = left;
         }
    }
}

//Modify the above function in such way that i can use the same funtion for sorting by any attribute