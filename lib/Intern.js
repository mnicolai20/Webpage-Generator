// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(school) {
        super(name, id, email, role);
        this.school = school;
    };

    getSchool(){
        return this.school;
    };

    getRole(){
        return this.role;
    }
}

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your intern's name?"
    },

    {
        type: "input",
        name: "ID",
        message: "What is your intern's ID?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your intern's email?"
    },

    {
        type: "input",
        name: "school",
        message: "What school does your intern attend?"
    }
]