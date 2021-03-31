const inquirer = require('inquirer');
const Employee = require('./class-lib/Employee');
const Manager = require('./class-lib/Manager');
const Engineer = require('./class-lib/Engineer');
const Intern = require('./class-lib/Intern');
const fs = require('fs');
const { async } = require('rxjs');

function runInquirer(){
    const initPrompt = [{
        type: 'confirm',
        message: 'What is your job title?',
        name: 'title',
        choices: ['Manager', 'Engineer', 'Intern'],
    }, ];
    return inquirer
        .prompt(initPrompt);
};

const runInquirerEmployee = () => {
    const employeePrompts = [{
        type: 'input',
        message: 'What is this persons name?',
        name: 'name',
    }, {
        type: 'input',
        message: 'What is this persons ID?',
        name: 'id',
    }, {
        type: 'input',
        message: 'What is this persons email?',
        name: 'email',
    }, ];
    return inquirer
        .prompt(employeePrompts);
};

const runInquirerManager = () => {
    const managerPrompt = [{
        type: 'input',
        message: `What is this manager's office number?`,
        name: 'officeNumber', 
    }, ];
    return inquirer
        .prompt(managerPrompt)
};

const runInquirerEngineer = () => {
    const engineerPrompt = [{
        type: 'input',
        message: `What is this Engineer's GitHub account name?`,
        name: 'github',
    },];
    return inquirer
        .prompt(engineerPrompt);
};

const runInquirerIntern = () => {
    const internPrompt = [{
        type: 'input',
        message: 'What school does this Intern attend?',
        name: 'school',
    }, ];
    return inquirer
        .prompt(internPrompt);
};

async function buildTeam(){
    let employeeArray = [];
    const promise = new Promise((resolve,reject) => {
        runInquirer()
            .then(function(title) {
                runInquirerEmployee().then(/* need to start the employee's object here? */);
                switch(title){
                    case 'Manager':
                        runInquirerManager().then(/*return the answer in here --also add 'resolve("done)' to end of this--*/);
                        break;
                    case 'Engineer':
                        runInquirerEngineer().then();
                        break;
                    case 'Intern':
                        runInquirerIntern().then();
                        break;
                }
                // make employee objects inside of switch or here? 
            })
    })
    const result = await promise;
    console.log(result); 
};



buildTeam();