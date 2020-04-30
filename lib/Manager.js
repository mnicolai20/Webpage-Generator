// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, email, role);
        this.officeNumber = officeNumber;
    };

    getRole(){
        return this.role;
    }

}

const managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "What is your manager's name?"
    },

    {
        type: "input",
        name: "managerID",
        message: "What is your manager's ID?"
    },

    {
        type: "input",
        name: "managerEmail",
        message: "What is your manager's email"
    },

    {
        type: "input",
        name: "managerOffice",
        message: "What is your manager's office number?"
    }
]