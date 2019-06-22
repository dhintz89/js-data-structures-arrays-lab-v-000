// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.pop(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}