/*
File Name: ComplexApplication.js

This code is a complex JavaScript application for managing employee data.

*/

// Employee class
class Employee {
    constructor(firstName, lastName, position, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.salary = salary;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    getAnnualSalary() {
        return this.salary * 12;
    }
}

// Database class
class Database {
    constructor() {
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    removeEmployee(employee) {
        const index = this.employees.indexOf(employee);
        if (index !== -1) {
            this.employees.splice(index, 1);
        }
    }
    getEmployeesByPosition(position) {
        return this.employees.filter((employee) => employee.position === position);
    }
}

// Creating instances of employees
const emp1 = new Employee("John", "Doe", "Manager", 5000);
const emp2 = new Employee("Jane", "Smith", "Developer", 4000);
const emp3 = new Employee("Bob", "Johnson", "Developer", 3500);
const emp4 = new Employee("Emily", "Davis", "Designer", 3000);

// Creating database instance
const database = new Database();

// Adding employees to the database
database.addEmployee(emp1);
database.addEmployee(emp2);
database.addEmployee(emp3);
database.addEmployee(emp4);

// Removing an employee from the database
database.removeEmployee(emp2);

// Getting employees by position
const developers = database.getEmployeesByPosition("Developer");

// Displaying the employee details
for (let employee of developers) {
    console.log("Name:", employee.getFullName());
    console.log("Position:", employee.position);
    console.log("Annual Salary:", employee.getAnnualSalary());
    console.log("------------------------");
}

// Additional complex code...

// ...
// More complex code here
// ...

// End of the complex application