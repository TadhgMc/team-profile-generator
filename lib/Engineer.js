const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(name,id,email,gitHub,title){
        super(name,id,email);
        this.gitHub = gitHub;
        this.title = title;
    }
    getTitle(){
        return this.title
    }
    getGitHub(){
        return this.gitHub;
    }
}

module.exports = Engineer;