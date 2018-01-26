/*
loops forLoop(array) adds `"I am ${i} strange loop${i === 0? '' : 's'}."` to an array 25 times:
*/
function forLoop(array) {
  var i;
  for (i = 0; i < 25; i++) {
  array[array.length]=("I am ${i}+1 strange loop${i === 0? '' : 's'}.");
  }
  //array[array.length]=("I am ${i}+1 strange loop${i === 0? '' : 's'}."); 
  return array;
}

/*

/*
loops whileLoop(n) counts down from n to 0:
*/

function whileLoop(n) {
  var textMsg:
  while (n > 0) {
  console.log(n);
  --n; 
  }
  if (n=0)return console.log('done');
}



/*
loops doWhileLoop(array) removes elements from `array` until `array` is empty or until `maybeTrue()` returns `false`:
*/

/*
function doWhileLoop(array) {
  
}
*/

