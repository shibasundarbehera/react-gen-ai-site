 

// import { getRandomInt } from './app.js'; 
// var a =  getRandomInt(1, 10);
// console.log(a);

console.log('app.js loaded');
console.log (3 + 4);

class App {
  constructor() {
    this.name = 'App';
    this.version = '1.0.0';
  }

  getName() {
    return this.name;
  }

  getVersion() {
    return this.version;
  }
}

let app = new App();
console.log(`App Name: ${app.getName()}`);
console.log(`App Version: ${app.getVersion()}`);

const hobbies = ['Reading', 'Gaming', 'Hiking', 'Cooking'];
 
const index = hobbies.findIndex((hobby) => hobby === 'Gaming') !== -1 
console.log(`Index of 'Gaming': ${index}`);

hobbies.map((hobby) => {
  console.log(`Hobby: ${hobby}`);
}
);