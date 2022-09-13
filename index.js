const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const generateHTML = require('./src/generateHTML')

const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')
const teamMembers = []

const createManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?"
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the team manager's ID?"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?"
        },
    ])
        .then((data) => {
            const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber)
            teamMembers.push(manager)
            console.log(teamMembers)
            createTeam()
        })
}

const addEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the engineer's ID?"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email?"
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "What is the engineer's github?"
        },
    ])
        .then((data) => {
            const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.gitHub)
            teamMembers.push(engineer)
            console.log(teamMembers)
            createTeam()
        })
}

// const addIntern = () => {
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'InternName',
//             message: "What is the Intern's name?"
//         },
//         {
//             type: 'input',
//             name: 'engineerId',
//             message: "What is the engineer's ID?"
//         },
//         {
//             type: 'input',
//             name: 'engineerEmail',
//             message: "What is the engineer's email?"
//         },
//         {
//             type: 'input',
//             name: 'gitHub',
//             message: "What is the engineer's github?"
//         },
//     ])
//         .then((data) => {
//             const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.gitHub)
//             teamMembers.push(engineer)
//             console.log(teamMembers)
//             createTeam()
//         })
// }
const createTeam = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'memberType',
            message: "What type of team member would you like to add?",
            choices: ['Engineer', 'Intern', 'No more team members']
        },
    ])
        .then((data) => {
            switch (data.memberType) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default:
                    renderTeam();
            }
        })
}





const renderTeam = (teamMembers) => {
    fs.writeFileSync('dist/index.html', generateHTML(teamMembers))
    //make sure the file path is actually correct, "loosey goosey"

}
createManager()

