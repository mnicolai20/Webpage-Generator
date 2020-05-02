// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(github, name, id, email) {
        super(name, id, email);
        this.githubUser = github;
    };

    getGithub(){
        return this.githubUser;
    };

    getRole(){
        return "Engineer";
    }
}