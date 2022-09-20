export const rand=(lowerValue, upperValue,length) =>{
  let array = [];
  for (let i = 0; i < length; i++) {
    let num = Math.floor(Math.random() * (upperValue - lowerValue ) + lowerValue);
    array.push(num);
  }
  return array;
}