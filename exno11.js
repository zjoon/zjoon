/* 
Write a program to calculate factorial of a number using reduce and using for loops


6! = 6*5*4*3*2*1

*/




 let arr2;
 arr2 = [1, 2, 3, 4,5,6]
 red = (a, b) => {
  return a * b
}
  console.log(arr2.reduce(red))

