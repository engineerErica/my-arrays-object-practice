//1
const numbers = [1, 2, 3];

const printSecondVal = arr => {
    const [first, second, third] = arr;
    console.log(second);   
}
printSecondVal(numbers);

//2
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const print = ({name, city}) => {
    const personName = name;
    const personCity = city;
    console.log(personName);
    console.log(personCity);
}
print(person);

//3
const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2022
};

const printKeys = obj => {
    const keysArray = Object.keys(obj);
    console.log(keysArray);   
}
printKeys(car);

//4
const printVals = obj => {
    const valuesArray = Object.values(obj);
    console.log(valuesArray)
}
printVals(car);

//5
const printEntries = obj => {
    const entriesArray = Object.entries(obj);
    console.log(entriesArray);
}
printEntries(car);