const Engineer = require("../lib/Engineer")

describe("Engineer class", () => {
    it('should create new engineer with given parameters', () =>{
        const engineer = new Engineer('Calvin', 23, 'crhinesmith@gmail.com', 'ripbog')
        expect(engineer.name).toBe('Calvin')
        expect(engineer.id).toBe(23)
        expect(engineer.email).toBe('crhinesmith@gmail.com')
        expect(engineer.github).toBe('ripbog')
    })
});
