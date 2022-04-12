const Manager = require("../Manager")

test("user input id", () => {
    const id = 19
    const emp = new Manager(id)
    expect(emp.id).toBe(id)
})

test("user input name", () => {
    const name = "Jimmy"
    const empName =  new Manager(name)
    expect(empName.name).toBe(name)
})

test("user input email", () => {
    const email = "test4@test.com"
    const empEmail =  new Manager(email)
    expect(empEmail.email).toBe(email)
})

test("user input office number", () => {
    const officeNumber = "13"
    const empOfficeNumber =  new Manager(officeNumber)
    expect(empOfficeNumber.officeNumber).toBe(officeNumber)
})