/* Alyssa was asked to write an implementation of a rolling buffer. You can add 
and remove elements from a rolling buffer. However, once the buffer becomes full, 
any new elements will displace the oldest elements in the buffer.

She wrote two implementations of the code for adding elements to the buffer. In 
presenting the code to her team leader, she said "Take your pick. Do you prefer 
push() or concat() for modifying the buffer?".

Is there a difference between these implementations, other than the method she
used to add an element to the buffer? You may assume that newElement will always 
be a primitive value.

addToRollingBuffer1: Uses the push method, which is mutating and directly changes
the array when it adds new elements to the end of the array or removes them with
the shift method.

addToRollingBuffer2: Uses the concat method, which is a copying method and does
not mutate the array. This method creates and returns a shallow copy of the 
original array.

*/

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement); // adds new element to the end of the array
  if (buffer.length > maxBufferSize) {
    buffer.shift(); // removes the first element of the array
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}