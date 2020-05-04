# Webpage-Generator

## How to Use

* Open the application in your terminal of choice and run, node app.js.

* Answer the questions as prompted. Add as many team members as necessary.

* When finished select the option that you do not want to add anymore team members.

* An HTML page will be created for you displaying all of your information.

## The Code

* Created the emoployee object. Extended the employee properties to manager, engineer, and intern.

* Exported all moduales.

* Created the Team array, which all new employees will be added to.

* Defined the base question, along with the questions pertaining to managers, engineers, and interns.

* Created the init function, which prompts the initial manager questions, pushes the new manager to the team array.

* Created the function askBaseQuestions, which is prompted after each series of questions. If no more team members are being added, the createOutput function will be run.

* Created the askEngineerQuestions and askInternQuestions which will prompt their questions when they are selected from the base question. Each function also pushes the new member to the team array when completed.

* Created the createOutput function which makes a new directory from the provided HTML template and filles the HTML in with all of the information contained in the Team array.

## Final Product

* This section is created dynamically and contains all of the information the user provided.

[capture.PNG](This section of the page relies on user input)