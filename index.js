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
                                    break;
                                case 'Engineer':
                                    runInquirerEngineer().then(function({gitHub}){
                                        this.employee = new Engineer(name,id,email,gitHub,title);
                                        employeeArray.push(employee);
                                        numOfEmployees++;
                                        resolve("done");
                                    });
                                    break;
                                case 'Intern':
                                    runInquirerIntern().then(function({school}){
                                        this.employee = new Intern(name,id,email,school,title);
                                        employeeArray.push(this.employee);
                                        numOfEmployees++;
                                        resolve("done");
                                    });
                                    break;
                                default:
                                    console.log('there has been an issue');
                            };//switch
                        } ).catch((err) => err ? console.log(err + '/n @write file') : console.log('Successfully created page!'))// end of runInquirerEmployee .then ;
                    }

                }).catch()//end of '.then(function(title) {' ;

        } ).catch((err) => err ? console.log(err + '/n @write file') : console.log('Successfully created page!'))//end of whole promise;

        const result = await promise;
        console.log(result); //DONT PUSH ME

    } //end of 'for' loop

    console.log(employeeArray); //DONT PUSH ME

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

    function htmlCardMakur(){
        let empCard = '';
        for (j = 0; j < employeeArray.length; j++){
            console.log(employeeArray[j]); //DONT PUSH ME
            empCard += 
            `
        <div class="card bg-danger m-5 p-2 rounded-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${employeeArray[j].name}</h5>
                <p class="card-text">${employeeArray[j].title}</p>
            </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employeeArray[j].id}</li>
                <li class="list-group-item">${whichTitle(employeeArray[j])}</li>
                <li class="list-group-item">Email: ${employeeArray[j].email}</li>
            </ul>
        </div>
            `;
        }
        return empCard;
    }

    let htmlContent = 
    `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <title>My Team!</title>
</head>
<body class="bg-dark">

    <nav class="navbar navbar-dark bg-danger">
        <div class="">
            <h1 class="navbar-brand">My Team</h1>
        </div>
    </nav>

    <main class="container-fluid row">
        ${htmlCardMakur()}
    </main>

</body>
</html>
    `;

    fs.writeFile('TeamPage.html', htmlContent, (err) => err ? console.log(err + '/n @write file') : console.log('Successfully created page!'))

}; // end of buildTeam();


buildTeam();