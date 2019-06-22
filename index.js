// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriverName(name) {
  drivers.pop(name);
}

function destructivelyPrependDriverName(name) {
  drivers.unshift(name)
}