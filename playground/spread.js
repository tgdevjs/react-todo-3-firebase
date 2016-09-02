function add (a, b) {
  return a + b;
}

console.log('add numbers directly: ', add(3, 1));

var toAdd = [9, 5];
console.log('toAdd array indicies: ', add(toAdd[0], toAdd[1]) );
console.log('toAdd array spread: ', add(...toAdd) );

var groupA = ['A','B'];
var groupB = ['D','E'];
var final = [...groupA, 'C', ...groupB];
console.log('spread arrays as elements: ', final);
