const Engineer = require("./library/Engineer")
const Employee = require("./library/Employee")
const Manager = require("./library/Manager")
const Intern = require("./library/Intern")
const inquirer = require("inquirer")
//const Kevin = new Engineer ("Kevin", 1, "karguello90@gmail.com", "karguello90")
//console.log(Kevin)
const teamArray = []

function promptManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Please enter the name of the Manager."
        },
        {
            type: "input",
            name: "managerID",
            message: "Please enter the ID of the Manager."
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Please enter the email of the Manager.",
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "Please enter the office number of the Manager.",
        }
    ]) .then(data => {
        const instance = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOfficeNumber)
        teamArray.push(instance)
        console.log(teamArray)
        newMember()
    })
}
    promptManager()

function promptEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Please enter the name of the Engineer."
        },
        {
            type: "input",
            name: "engineerID",
            message: "Please enter the ID of the Engineer."
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Please enter the email of the Engineer.",
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "Please enter the GitHub of the Engineer.",
        }
    ]) .then(data => {
        const instance = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGitHub)
        teamArray.push(instance)
        console.log(teamArray)
        newMember()
    })
}

function promptIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Please enter the name of the Intern."
        },
        {
            type: "input",
            name: "internID",
            message: "Please enter the ID of the Intern."
        },
        {
            type: "input",
            name: "internEmail",
            message: "Please enter the email of the Intern.",
        },
        {
            type: "input",
            name: "internSchool",
            message: "Please enter the school of the Intern.",
        }
    ]) .then(data => {
        const instance = new Intern(data.internName, data.internID, data.internEmail, data.internSchool)
        teamArray.push(instance)
        console.log(teamArray)
        newMember()
    })
}

function newMember() {
    inquirer.prompt([
        {
        type: "list", 
        name: "newMember",
        message: "what kind of employee would you like to add?",
        choices: ["Manager", "Engineer", "Intern", "none"]
        }
    ]) .then (data => {
        if (data.newMember === "Manager") {
            promptManager()
        } 
        else if(data.newMember === "Engineer") {
            promptEngineer()
        }
        else if(data.newMember === "Intern") {
            promptIntern()
        }
        else {
            console.log("team created")
        }
    })
}
// function promptEmployee() {
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "employeeName",
//             message: "Please enter the name of the Employee."
//         },
//         {
//             type: "input",
//             name: "employeeID",
//             message: "Please enter the ID of the Employee."
//         },
//         {
//             type: "input",
//             name: "employeeEmail",
//             message: "Please enter the email of the Employee.",
//         }
//     ]) .then(data => {
//         const instance = new Employee(data.employeeName, data.employeeID, data.employeeEmail)
//         teamArray.push(instance)
//         console.log(teamArray)
//     })
// }