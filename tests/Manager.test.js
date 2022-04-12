const Manager = require("../Manager")

test("Manager test id, name, email, and officeNumber", () => {
    const manager = new Manager("Rob", "id23", "test3@test.com", "512")
    expect(manager.getOfficeNumber()).toBe("512")
} )