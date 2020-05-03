const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];

const baseQuestion = [
    {
        type: "list",
        name: "employeeType",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I would not like to add more team members"]
    }
];

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
];

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
];

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
];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function init() {
    inquirer.prompt(managerQuestions)
    .then( function (userResponse) {
        const newManager = new Manager(userResponse.managerOffice, userResponse.managerName, userResponse.managerID, userResponse.managerEmail);
        team.push(newManager);
        askBaseQuestion();
    })
    
};

function askBaseQuestion(){
    inquirer.prompt(baseQuestion)
    .then(function(questionResponse){
    if(questionResponse.employeeType == "Engineer") {
        askEngineerQuestions();
    }
    else if(questionResponse.employeeType == "Intern") {
        askInternQuestions();
    }
    else if(questionResponse.employeeType == "I would not like to add more team members"){
        createOutput();
    }
})
}

function askEngineerQuestions(){
    inquirer.prompt(engineerQuestions)
    .then(function (userReponse){
        const newEngineer = new Engineer(userReponse.name, userReponse.ID, userReponse.email, userReponse.github);
        team.push(newEngineer);
        askBaseQuestion();
    });
};

function askInternQuestions(){
    inquirer.prompt(internQuestions)
    .then(function (userReponse){
        const newIntern = new Intern(userReponse.name, userReponse.ID, userReponse.email, userReponse.school);
        team.push(newIntern);
        askBaseQuestion();
    })
};

function createOutput(){
    console.log(team);
    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(team), "utf-8")
    console.log("Output created");
}

init()
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```