const Intern = require("../Intern")

test("user input id", () => {
    const id = 3
    const emp = new Intern(id)
    expect(emp.id).toBe(id)
})

test("user input name", () => {
    const name = "Jim"
    const empName =  new Intern(name)
    expect(empName.name).toBe(name)
})

test("user input email", () => {
    const email = "email1@test.com"
    const empEmail =  new Intern(email)
    expect(empEmail.email).toBe(email)
})

test("user input Github profile", () => {
    const school = "School"
    const empSchool =  new Intern(school)
    expect(empSchool.school).toBe(school)
})