const Manager = require("../lib/Manager")

describe("manager class", () => {
    it('should create new manager with given parameters', () =>{
        const manager = new Manager('Calvin', 23, 'crhinesmith@gmail.com', 42)
        expect(manager.name).toBe('Calvin')
        expect(manager.id).toBe(23)
        expect(manager.email).toBe('crhinesmith@gmail.com')
        expect(manager.officenumber).toBe(42)
    })
});

