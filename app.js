const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./templates/templateHTML");

const writeFileAsync = util.promisify(fs.writeFile);

let teamArray = [];
let teamString = ``;


async function createTeam() {
     try {
          await addEmployee();

          for (let i = 0; i < teamArray.length; i++) {
               teamString = teamString + html.generateCard(teamArray[i]);
          }

          let finalHTML = html.generateHTML(teamString);
          console.log(teamString);

          writeFileAsync("./output/team.html", finalHTML);
     }    
     catch (err) {
          return console.log(err);
     }
};

async function addEmployee() {
     let allResponses = "";
     do {
          try {
               response = await inquirer.prompt([
                    {
                         type: "input",
                         name: "name",
                         message: "What is the employee's name?: "
                    },
                    {
                         type: "input",
                         name: "id",
                         message: "Enter the employee's ID: "
                    },
                    {
                         type: "input",
                         name: "email",
                         message: "Enter the employee's email address: "
                    },
                    {
                         type: "list",
                         name: "role",
                         message: "What is the employee's role:",
                         choices: ["Engineer", "Intern", "Manager"]
                    }
               ]);

               let response2 = "";

               if (response.role === "Engineer") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "input",
                         message: "What is the employee's GitHub username?:",
                    }, ]);

                    const engineer = new Engineer(response.name, response.id, response.email, response2.input);
                    teamArray.push(engineer);
               } 
               else if (response.role === "Intern") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "input",
                         message: "What school is the employee attending?:",
                    }, ]);

                    const intern = new Intern(response.name, response.id, response.email, response2.input);
                    teamArray.push(intern);
               } 
               else if (response.role === "Manager") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "input",
                         message: "What is the employee's office number?:",
                    }, ]);

                    const manager = new Manager(response.name, response.id, response.email, response2.input);
                    teamArray.push(manager);
               }   
          } 
          catch (err) {
               return console.log(err);
          }
          console.log(teamArray);

          allResponses = await inquirer.prompt([{
               type: "list",
               name: "finish",
               message: "Do you like to add another employee?: ",
               choices: [
                    "Yes",
                    "No"
               ]
          }, ]);

     } while (allResponses.finish === "Yes");
}

createTeam();