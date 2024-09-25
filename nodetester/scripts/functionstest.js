const handleTimeoute= () => {
    console.log("Timeout occurred");
}

setTimeout(handleTimeoute, 2000);

const handleTimeoute2 = () => {
    console.log("Timeout 2 occurred");
}

const intervalid = setInterval(() => {
  console.log("Interval occurred");  
}, 100  );

setTimeout(() => {
    console.log("Clearing interval");
    clearInterval(intervalid);
}
, 200);

function init()
{
    console.log("Initialization complete");
    function greeting(name) {
        console.log(`Hello, ${name}! Welcome to the Node Tester application.`);
    }
    greeting("Shiba");
}
init();