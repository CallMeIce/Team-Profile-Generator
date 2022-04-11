const Employee = require("../lib/Employee")

describe('Employee', () => {
    it('should return a name after the user writes one', () => {
        const employeeTest = new Employee("name")
        expect(employeeTest).toBe("name ")

    });
    
    it('should return an email after the user writes one', () => {
    });

    it('should return an id number after the user writes one', () => {
    });

});
test()
// describe('Letter class', () => {
//   it("Characters that aren't digits or letters are instantly visible", () => {
//     expect(new Letter('?').visible).toBe(true);
//   });

//   it('toString returns _ for letters', () => {
//     expect(new Letter('a').toString()).toBe('_');
//   });

//   describe('guess', () => {
//     it('Correct guess returns true', () => {
//       expect(new Letter('j').guess('j')).toBe(true);
//     });

//     it('Incorrect guess returns false', () => {
//       expect(new Letter('j').guess('l')).toBe(false);
//     });
//   });


// const fizzBuzz = require('../fizz');
 
// describe('fizzBuzz', () => {
//   it('should return the number if not a multiple of three or five', () => {
//     expect(fizzBuzz([1])).toBe('1');
//     expect(fizzBuzz([1, 2])).toBe('1, 2');
//   });

//   it('should return Fizz if multiple of 3', () => {
//     expect(fizzBuzz([3])).toBe('Fizz');
//     expect(fizzBuzz([3, 6, 12])).toBe('Fizz, Fizz, Fizz');
//   });

//   it('should return Buzz if multiple of 5', () => {
//     expect(fizzBuzz([10])).toBe('Buzz');
//     expect(fizzBuzz([10, 20, 25])).toBe('Buzz, Buzz, Buzz');
//   });

//   it('should return FizzBuzz if a multiple of both 3 and 5', () => {
//     expect(fizzBuzz([15])).toBe('FizzBuzz');
//     expect(fizzBuzz([15, 30, 45])).toBe('FizzBuzz, FizzBuzz, FizzBuzz');
//   });

// });



// const Letter = require('../lib/Letter');

// describe('Visibility', () => {
//   it('Characters that are digits or letters should not be visible', () => {
//     expect(new Letter('j').visible).toBe(false);
//   });

//   it('Correct guess makes character visible', () => {
//     const letter = new Letter('j');
//     const { visible } = letter;

//     // Correct guess
//     letter.guess('j');

//     // Letter was not originally visible
//     expect(visible).toBe(false);

//     // Letter is now visible
//     expect(letter.visible).toBe(true);
//   });

//   it('Incorrect guess does not make character visible', () => {
//     const letter = new Letter('j');
//     const { visible } = letter;

//     // Incorrect guess
//     letter.guess('l');

//     // Letter was not originally visible
//     expect(visible).toBe(false);

//     // Letter is still not visible
//     expect(letter.visible).toBe(false);
//   });

//   it('Should return the guessed character when using toString', () => {
//     const letter = new Letter('j');

//     letter.guess('j');

//     expect(letter.toString()).toBe('j');
//   });
// });

// describe('Letter class', () => {
//   it("Characters that aren't digits or letters are instantly visible", () => {
//     expect(new Letter('?').visible).toBe(true);
//   });

//   it('toString returns _ for letters', () => {
//     expect(new Letter('a').toString()).toBe('_');
//   });

//   describe('guess', () => {
//     it('Correct guess returns true', () => {
//       expect(new Letter('j').guess('j')).toBe(true);
//     });

//     it('Incorrect guess returns false', () => {
//       expect(new Letter('j').guess('l')).toBe(false);
//     });
//   });

//   describe('getSolution', () => {
//     it('returns character', () => {
//       expect(new Letter('l').getSolution()).toBe('l');
//     });
//   });
// });
