const Employee = require("../lib/Employee");

describe("Employee class", () => {
    it('should create new employee with given parameters', () =>{
        const employee = new Employee('Calvin', 23, 'crhinesmith@gmail.com')
        expect(employee.name).toBe('Calvin')
        expect(employee.id).toBe(23)
        expect(employee.email).toBe('crhinesmith@gmail.com')
    })
});
