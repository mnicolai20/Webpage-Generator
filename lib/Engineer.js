// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(github) {
        super(name, id, email, role);
        this.GitHubUser = github;
    };

    getGithub(){
        return GitHubUser;
    };

    getRole(){
        return this.role;
    }
}

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your engineer's name?"
    },

    {
        type: "input",
        name: "ID",
        message: "What is your engineer's ID?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your engineer's email?"
    },

    {
        type: "input",
        name: "github",
        message: "What is your engineer's github username?"
    }
]