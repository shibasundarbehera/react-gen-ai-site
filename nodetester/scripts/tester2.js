let a =23;
console.log(`The value of a is: ${a}`);
const greetings = (a)=>{
    console.log(`Hello, the value of a is: ${a}`);
}

greetings("test asdf");
greetings("test asdf2");

const user={
    name: "John Doe",
    age: 30,
    email: "shibasb@fnk.cm"
}
 
//console.log(`User Details: Name - ${user.name}, Age - ${user.age}, Email - ${user.email}`);

//----
const employees = [
    { name: "Alice", position: "Developer" },
    { name: "Bob", position: "Designer" },
    { name: "Charlie", position: "Manager" }
];

// employees.map((employee) => {
//    console.log(`Employee Name: ${employee.name}, Position: ${employee.position}`);
// });
console.log("Employee Details:");
let abc = employees.map((employee) => ({"emp": employee}));
console.log(abc);

const {} = employees.reduce((abc, employee) => {
    console.log(`Employee Name: ${employee.name}, Position: ${employee.position}`);
    return abc;
}
, {});
// ----
const numbers = [1, 2, 3, 4, 5];
var maxNumber = numbers.reduce((max, current,index, arr)=>{
    //console.log(`Current Number: ${current}, Max so far: ${max}`);
    return current > max ? current : max;   
    console.log(`Index: ${index}, Array Length: ${arr.length}`);

}, numbers[0]);
console.log(`Max Number: ${maxNumber}`);

// ----
const fruits = ["apple", "banana", "cherry","date","elderberry","apple", "fig", "grape","date"];

const count = fruits.reduce((accumulator, fruit) => {
    accumulator[fruit]= (accumulator[fruit] ||0)+1;
    return accumulator;
}
, {});
console.log("Fruit Count:", count);
// ----

 