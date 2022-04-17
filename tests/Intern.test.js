const Intern = require("../lib/Intern")

test("Intern test id, name, email, and school", () => {
    const intern = new Intern("Jim", "id24", "test2@test.com", "schoolName")
    expect(intern.getSchool()).toBe("schoolName")
} )