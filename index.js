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



//put promise into a for loop, then use anothaOne to add to the loop number to loop again?

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
                        if (title == 'Manager'){
                            runInquirerManager().then(function({officeNumber}){
                                this.employee = new Manager(name,id,email,officeNumber,title);
                                employeeArray.push(employee);
                                console.log(employee);
                                resolve("done");
                            });/*return the answer in here --also add 'resolve("done)' to end of this--*/
                        } else if(title == 'Engineer'){
                            runInquirerEngineer().then(function({gitHub}){
                                this.employee = new Engineer(name,id,email,gitHub,title);
                                employeeArray.push(employee);
                                console.log(employee);
                                resolve("done");
                            });
                        } else if(title == 'Intern') {
                            runInquirerIntern().then(function({school}){
                                this.employee = new Intern(name,id,email,school,title);
                                employeeArray.push(employee);
                                console.log(employee);
                                resolve("done");
                            });
                        } else {
                            console.log('there has been an issue');
                        };
                        
                    },

                    
                    ).catch((err) => console.log(err))// end of runInquirerEmployee .then
                }

                })//end of '.then(function(title) {'

        } ).catch((err) => console.log(err))//end of promise
            const result = await promise;
            console.log(result);
    } 
};

// const anothaOne = () => {
//     const anotherEmployee = [{
//         type: 'choice',
//         message: 'Would you like to add another employee?',
//         name: 'moreEmployees',
//     }, ];
//     return inquirer
//         .prompt(anotherEmployee)
//         .then((moreEmployee) => {
//                         if (moreEmployee){
//                             return numOfEmployees++;
//                         }else{
//                             console.log('no more employee');
//                         }
//                         });
// }

buildTeam();