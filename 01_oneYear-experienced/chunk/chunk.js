function chunk(arr, size) {
  let result = [];
  let subArr = [];
  for(let i = 0; i<arr.length; i++){
    subArr.push(arr[i]);
    if(subArr.length === size){
      result.push(subArr);
      subArr= [];
    }
  }
  if(arr.length % size > 0){
    result.push(subArr);
  }
  return result;
}

console.log(chunk([1,2,3,4,5], 3));