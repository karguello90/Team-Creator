class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }
    getName () {
        return this.name
    }
    getID () {
        return this.id
    }
    getEmail () {
        return this.email
    }
    getRole () {
        return "Employee"
    }
}
    module.exports=Employee

    //const Kevin = new Employee ("Kevin", 1, karguello90@gmail.com)
    //Kevin.getName()
    //Kevin.getID()
    //Kevin.getEmail()
    //Kevin.getRoll()