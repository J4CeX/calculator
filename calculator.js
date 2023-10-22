let memory = ``;
let calculation = ``;
let result = ``;

const calculationScreen = document.querySelector(`.calculation`);
const memoryScreen = document.querySelector(`.memory`)

const addToCalculation = (calc) => {
  calculation += calc;
  // console.log("calculation: " + calc);
  calculationScreen.innerText = calculation;
}

const addToMemory = (calc) => {
  memory += calc;
  calculation = ``;
  // console.log("memory: " + calc)
  memoryScreen.innerText = memory;
}



document.getElementById(`zero`).addEventListener(`click`, (event) => {
  if(calculation !== `0`) {
    addToCalculation(0);
  } else {
    console.log("N");
  }
});

document.getElementById(`one`).addEventListener(`click`, (event) => {
  addToCalculation(`1`);
});

document.getElementById(`two`).addEventListener(`click`, (event) => {
  addToCalculation(`2`);
});

document.getElementById(`three`).addEventListener(`click`, (event) => {
  addToCalculation(`3`);
});

document.getElementById(`four`).addEventListener(`click`, (event) => {
  addToCalculation(`4`);
});

document.getElementById(`five`).addEventListener(`click`, (event) => {
  addToCalculation(`5`);
});

document.getElementById(`six`).addEventListener(`click`, (event) => {
  addToCalculation(`6`);
});

document.getElementById(`seven`).addEventListener(`click`, (event) => {
  addToCalculation(`7`);
});

document.getElementById(`eight`).addEventListener(`click`, (event) => {
  addToCalculation(`8`);
});

document.getElementById(`nine`).addEventListener(`click`, (event) => {
  addToCalculation(`9`);
});

document.getElementById(`dot`).addEventListener(`click`, (event) => {
  if(calculation == ``) {
    calculation = `0`;
  }
  addToCalculation(`.`);
});

document.getElementById(`add`).addEventListener(`click`, (event) => {
  addToMemory(calculation + ` + `);
});

document.getElementById(`difference`).addEventListener(`click`, (event) => {
  addToMemory(calculation + ` - `);
});

document.getElementById(`multiply`).addEventListener(`click`, (event) => {
  addToMemory(calculation + ` * `);
});

document.getElementById(`divide`).addEventListener(`click`, (event) => {
  addToMemory(calculation + ` / `);
});

document.getElementById('perc').addEventListener('click', (event) => {
  /**/
});

document.getElementById(`negate`).addEventListener(`click`, (event) => {
  calculation = -calculation;
  calculationScreen.innerText = calculation;
});

document.getElementById(`reciprocal`).addEventListener(`click`, (event) => {
  calculation = `${Math.pow(calculation, -1)}`;
  calculationScreen.innerText = calculation;
});

document.getElementById(`power`).addEventListener(`click`, (event) => {
  calculation = `${Math.pow(calculation, 2)}`;
  calculationScreen.innerText = calculation;
});

document.getElementById(`sqrt`).addEventListener(`click`, (event) => {
  calculation = `${Math.sqrt(calculation)}`;
  calculationScreen.innerText = calculation;
});

document.getElementById(`remove`).addEventListener(`click`, (event) => {
  calculation = calculation.slice(0, length-1);
  if(calculation == ``) {
    calculationScreen.innerText = `0`;
  } else {
    calculationScreen.innerText = calculation;
  }
});

document.getElementById(`C`).addEventListener(`click`, (event) => {
  calculation = ``;
  memory = ``;
  result = ``;
  memoryScreen.innerText = ``;
  calculationScreen.innerText = `0`;
});

document.getElementById(`CE`).addEventListener(`click`, (event) => {
  calculation = ``;
  calculationScreen.innerText = `0`;
});

document.getElementById(`equal`).addEventListener(`click`, (event) => {
  result = eval(memory + calculation);
  // console.log("calculation result: " + result);
  calculationScreen.innerText = result;
  memoryScreen.innerText = memory + calculation + " = ";

  memory = result.toString();
  // console.log("memory result: " + memory);
  calculation = result.toString();
  result = ``;
});
