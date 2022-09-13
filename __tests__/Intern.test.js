const Intern = require("../lib/Intern")

describe("Intern class", () => {
    it('should create new intern with given parameters', () =>{
        const intern = new Intern('Calvin', 23, 'crhinesmith@gmail.com', 'KU')
        expect(intern.name).toBe('Calvin')
        expect(intern.id).toBe(23)
        expect(intern.email).toBe('crhinesmith@gmail.com')
        expect(intern.school).toBe('KU')
    })
});