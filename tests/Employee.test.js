const Employee = require("../lib/Employee")

test("Employee test id, name, and email", () => {
    const employee = new Employee("id20", "Zack", "test2@test.com")
    expect(employee.getName()).toBe("Zack")
} )