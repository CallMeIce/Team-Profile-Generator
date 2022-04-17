const Engineer = require("../lib/Engineer")

test("Engineer test id, name, email, and github", () => {
    const engineer = new Engineer("Bob", "id25", "test@test.com", "profile")
    expect(engineer.getGithub()).toBe("profile")
} )