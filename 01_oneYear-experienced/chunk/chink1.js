function chunk(arr, size) {
  let result = [];
  let subArr = [];
  for (let i = 0; i < arr.length; i++) {
    subArr.push(arr[i]);
    if(subArr.length === size || i === arr.length-1){
      result.push(subArr);
       subArr.length = [];
    }      
  }
  return result;
}


console.log(chunk([1,2,3,4,5,6,7], 4));