class User {

    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.mobile = "1234567890"; // default mobile number
        this.address = "123 Main St, City, Country"; // default address
        this.isActive = true; // default status
        this.createdAt = new Date(); // timestamp of creation
        this.updatedAt = new Date(); // timestamp of last update
    }

    getDetails() {
        return `User Details: Name - ${this.name}, Age - ${this.age}, Email - ${this.email} , Mobile - ${this.mobile}, Address - ${this.address}, Active - ${this.isActive}, Created At - ${this.createdAt.toISOString()}, Updated At - ${this.updatedAt.toISOString()}`;
    }

    static greet(user) {
        return `Hello, ${user.name}! Welcome to the Node Tester application.`;
    }
    static greetWithAge(user) {
        return `Hello, ${user.name}! You are ${user.age} years old.`;
    }
     

}

const shiba = new User("Shiba", 25, "sshbk.mail.com");
console.log(shiba.getDetails());
