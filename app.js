//This script fulfills the project reqs for "Kelvin Weather" in Codecademy

const kelvin = 293; //set variable of kelvin to 293

let celsius = kelvin - 273; // celsius is kelvin minus 273

let fahrenheit = celsius * (9 / 5) + 32; //formula for fahrenheit

let temperature = Math.floor(fahrenheit); //rounds down the fahreheit temp

console.log(`The temperature is ${temperature} degrees Fahreheit`)

let newton = celsius *(33/100)
let newtonTemp = Math.floor(newton);

console.log (`The temperature is ${newtonTemp} degrees in Newton`);
