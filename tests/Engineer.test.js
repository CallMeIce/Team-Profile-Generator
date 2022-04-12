const Engineer = require("../Engineer")

test("user input id", () => {
    const id = 10
    const emp = new Engineer(id)
    expect(emp.id).toBe(id)
})

test("user input name", () => {
    const name = "Frank"
    const empName =  new Engineer(name)
    expect(empName.name).toBe(name)
})

test("user input email", () => {
    const email = "email@test.com"
    const empEmail =  new Engineer(email)
    expect(empEmail.email).toBe(email)
})

test("user input Github profile", () => {
    const github = "Github"
    const empGithub =  new Engineer(github)
    expect(empGithub.github).toBe(github)
})