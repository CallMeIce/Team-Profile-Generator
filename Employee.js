class Employee{
    constructor(id, name, email) {
        this.id = id
        this.name = name
        this.email = email
        }
        getName(){return this.name}
        getEmail(){return this.email}
        getId(){return this.id}
        getRoll(){return "Employee"}
} 

module.exports = Employee