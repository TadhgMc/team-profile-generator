const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(name,id,email,officeNumber,title){
        super(name,id,email);
        this.officeNumber = officeNumber;
        this.title = title;
    }
    getTitle(){
        return this.title
    }
    getOfficeNum(){
        return this.officeNumber;
    }
}

module.exports = Manager;