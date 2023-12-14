// Build a simple loop, inside a function, that takes an array and prints the value of the array to the console.

function printArray() {
    let garriFlakes = ["groundnut", "sugar", "milk", "milo", "coconut"];
    let long = garriFlakes.length;

    for (let i = 0; i < long; i++) {
      console.log(garriFlakes[i]);
    }
  console.log(garriFlakes)
}
printArray();