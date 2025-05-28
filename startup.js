// Advance objects review : Use factory function for defined object //

// //+++++++++++++++++++++++ Test 1 : General defined objects +++++++++++++++++++++++++//
// const startUp = {
//     _name: 'JRD Fintech Magnificient',
//     _release: '25 May 2025',
//     _detail: 'My startup is help people to create lifestyle with investmet',
//     _employ: 1500,
//     hob () {
//       return `The "${this._name}" have a passion to help people who want to know how to create a lifestyle with suitable investment.`},
//     get employCount() {
//       if (typeof this._employ === 'number') {
//         return 'My current employee count is ' + this._employ;
//       } else {
//         return 'System malfunction: cannot retrieve employee count'
//       }},
//     set employCount(num) {
//       if (typeof num === 'number' && num >= 0) {
//         this._employ = num;
//       } else {
//         console.log('Pass in a number that is greater than or equal to 0');
//       }
//     }
// };

// // Getters-Setters for check condition and execute code 
// startUp.employCount = 1000;  /* Set parameter value for condition and execute code */
// console.log(startUp.employCount);

// // General function and .this keyword //
// console.log(startUp.hob());

// // Check access key:value in object//
// const startEntries = Object.entries(startUp);
// console.log(startEntries);



//+++++++++++++++++++++++ Test 2 : Property value shorthand defined objects +++++++++++++++++++++++++//

const startUp = (_name, _release, _detail, _employ) => {
  return {
    _name,
    _release,
    _detail,
    _employ,
    hob() {
      return `The "${this._name}" have a passion to help people who want to know how to create a lifestyle with suitable investment.`;
    },
    get employCount() {
      if (typeof this._employ === "number") {
        return "My current employee count is " + this._employ;
      } else {
        return "System malfunction: cannot retrieve employee count";
      }
    },
    set employCount(num) {
      if (typeof num === 'number' && num >= 0) {
        this._employ = num;
      } else {
        console.log('Pass in a number that is greater than or equal to 0');
      }
    }
  };
};

// Define value to parameter for execute code main-object(startUp) //
const bigFin = startUp(
  "JRD Fintech Magnificient",
  "25 May 2025",
  "My startup is help people to create lifestyle with investmet",
  1500
);

// Check log //
console.log(bigFin._name);
console.log(bigFin.hob());

// Set parameter value for condition and execute code //
bigFin.employCount = 2000; /* If this line of parameter value is already set. Value'll update HERE. */
console.log(bigFin.employCount);

// Check access key:value in object//
const startEntriees = Object.entries(bigFin);
console.log(startEntriees);

