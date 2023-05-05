// What will the following two lines of code output?

/* This will output 0.8999999999999999, because JS uses floats for all 
numeric operations. Floating point representations lack precision, so they
can yield weird results.*/
console.log(0.3 + 0.6);

// Since 0.3 + 0.6 will not evalutate to 0.9, this will output false
console.log(0.3 + 0.6 === 0.9);