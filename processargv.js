'use strict';

for (let j = 0; j < process.argv.length; j++) {
  console.log(j + ' -> ' + (process.argv[j]));
  //All this script does is loop through the process.argv array and prints the indexes,
  //along with the elements stored in those indexes.
  //It's very useful for debugging if you ever question what arguments you're receiving, and in what order.
}
// Now, to run this type the following command. Just make sure you are in the directory where the "processargv.js" file is saved
// $ node processargv.js tom jack 43

// $ node processargv.js tom jack 43
// 0 -> /Users/scott/.nvm/versions/node/v4.8.0/bin/node
// 1 -> /Users/scott/javascript/processargv.js
// 2 -> tom
// 3 -> jack
// 4 -> 43

// # minimist module

'use strict';

const args = require('minimist')(process.argv.slice(2));

console.log(args);
console.log(args.i);

// In the above code we use the slice method of the process.argv global object.
// The slice method, in this case, removes all prior array elements starting from the index passed to it as the parameter.

