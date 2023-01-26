const Engineer = require("./library/Engineer")
const Employee = require("./library/Employee")
const Manager = require("./library/Manager")
const Intern = require("./library/Intern")
const inquirer = require("inquirer")
//const Kevin = new Engineer ("Kevin", 1, "karguello90@gmail.com", "karguello90")
//console.log(Kevin)
const teamArray = []

function promptManager () {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Please enter the name of the Manager"
        },
        {
            type: "input",
            name: "managerID",
            message: "Please enter the ID of the Manager"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Please enter the email of the Manager",
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "Please enter the office number of the Manager",
        }
    ]) .then(data => {
        const instance = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOfficeNumber)
        teamArray.push(instance)
        console.log(teamArray)
    })
}
    promptManager()