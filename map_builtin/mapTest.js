// rules
// Use the map method on lighthouses so that we instead see an array of numbers.

// Example: function (x) { return (x * 2); }

// The array of numbers should be the length of each name in the lighthouses.

const lighthousees = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

const nameLengths = lighthousees.map(function(name) {
  return name.length;
});

console.log(nameLengths);


// write code here to use map
// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]