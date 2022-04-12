const Employee = require("../lib/Employee")

test("user input id", () => {
    const id = 24
    const emp = new Employee(id)
    expect(emp.id).toBe(id)
})

test("user input name", () => {
    const name = "Bob"
    const empName =  new Employee(name)
    expect(empName.name).toBe(name)
})

test("user input email", () => {
    const email = "test@test.com"
    const empEmail =  new Employee(email)
    expect(empEmail.email).toBe(email)
})