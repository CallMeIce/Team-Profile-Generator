const Employee = require("../lib/Employee")

test("user input id", () => {
    const id = 24
    const emp = new Employee(id)
    expect(emp.id).toBe(id)
})

test("user input name", () => {
    const name = "Bob"
    const empName =  
})