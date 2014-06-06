function Employee(id,name,salary){
  this.id = id;
  this.name = name;
  this.salary = salary;
}
Modify the above constructor function that exposes accessor methods exhibiting the following behavior

1. "id" should be readonly
2. "name" cannot be assigned a null or empty string value
3. "salary" cannot be assigned a value less than the current salary