const inquirer = require('inquirer');
const Employee = require('./class-lib/Employee');
const Manager = require('./class-lib/Manager');
const Engineer = require('./class-lib/Engineer');
const Intern = require('./class-lib/Intern');
const fs = require('fs');
const { async } = require('rxjs');

function runInquirer(){
    const initPrompt = [{
        type: 'list',
        message: 'What is your job title?',
        name: 'title',
        choices: ['Manager', 'Engineer', 'Intern', 'Finish',],
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
        name: 'gitHub',
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
    let numOfEmployees = 1;
    for (let i = 0; i < numOfEmployees; i++) {
        const promise = new Promise((resolve,reject) => {
            runInquirer()
                .then(function({title}) {
                    if(title === 'Finish'){        
                        resolve('done');
                    } else {
                        runInquirerEmployee().then(function({name,id,email}){
                            switch(title){
                            case 'Manager':
                                runInquirerManager().then(function({officeNumber}){
                                    this.employee = new Manager(name,id,email,officeNumber,title);
                                    employeeArray.push(employee);
                                    numOfEmployees++;
                                    resolve("done");
                                });
                            case 'Engineer':
                                runInquirerEngineer().then(function({gitHub}){
                                    this.employee = new Engineer(name,id,email,gitHub,title);
                                    employeeArray.push(employee);
                                    numOfEmployees++;
                                    resolve("done");
                                });
                            case 'Intern':
                                runInquirerIntern().then(function({school}){
                                    this.employee = new Intern(name,id,email,school,title);
                                    employeeArray.push(employee);
                                    numOfEmployees++;
                                    resolve("done");
                                });
                            default:
                                console.log('there has been an issue');
                            };//switch
                        } ).catch((err) => console.log(err))// end of runInquirerEmployee .then ;
                    }

                })//end of '.then(function(title) {' ;

        } ).catch((err) => console.log(err))//end of whole promise;

        const result = await promise;
        console.log(result);

    } //end of 'for' loop

    console.log(employeeArray);

    function whichTitle(employee){
        switch(employee.title){
            case 'Manager':
                return `Office Number: ${employee.officeNumber}`;
            case 'Engineer':
                return `Github Account: ${employee.gitHub}`;
            case 'Intern':
                return `Attending: ${employee.school}`;
        };
    }


}; // end of buildTeam();

//need to make function that displays title specific info
//call that function, in a funciton that creates the html cards (for loop to create each card)
//call the function to create html cards, into a varible that has the rest of the html content
//all that still in the async func

buildTeam();