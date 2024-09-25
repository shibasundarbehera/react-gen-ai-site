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
const fruits = ["apple", "banana", "cherry","date","elderberry","apple","apple", "fig","elderberry", "grape","date"];

const count = fruits.reduce((accumulator, fruit) => {
    accumulator[fruit]= (accumulator[fruit] ||0)+1;
    return accumulator;
}
, {"apple":1, "banana":1, "cherry":0, "date":0, "elderberry":0, "fig":0, "grape":0});
console.log("Fruit Count:", count);
// ----

const users = [
    { name: "Alice", role: "admin", department: "HR" },
    { name: "Bob", role: "user" , department: "Finance" },
    { name: "Carol", role: "admin", department: "IT" },
    { name: "Dave", role: "user", department: "Marketing" },
    { name: "Eve", role: "admin", department: "IT" }
  ];

  // group by role or department based on your requirement and pass the key accordingly in parenthesis
const groubykey = (arr,key) => {
  if (! key || typeof key !== 'string') {
    throw new Error("Invalid key provided for grouping");
  }
  return arr.reduce((acc, user) => {
    const groupKey = user[key] ?? 'undefined'; // fallback for missing keys
    (acc[groupKey] = acc[groupKey] || []).push(user);
    return acc;
  }, {});
};
const groupedByRole = groubykey(users, "role");
console.log("Grouped by Role:", groupedByRole);
const groupedByDepartment = groubykey(users, "department");
console.log("Grouped by Department:", groupedByDepartment);
// ----