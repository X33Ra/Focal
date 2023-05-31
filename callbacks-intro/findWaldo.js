// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found(i); // Pass the index to the callback
    }
  }
};

// Modify the callback function in the previous example so that it accepts a single argument index and logs it. The problem should therefore output something like "Found Waldo at index 2!".
// Modify the actionWhenFound function to let it receive and use the index
// Modify the findWaldo function so that it passes the index array to the callback

const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
};

// Test case
const names = ["Alice", "Bob", "Waldo", "Eve"];
findWaldo(names, actionWhenFound);
