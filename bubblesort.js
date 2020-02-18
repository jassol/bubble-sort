function bubbleSort(arr){
  let sorted = false;
  let swaps;
  while(!sorted){
    swaps = 0;
    for(let i=0; i< arr.length-1; i++){
      if(arr[i] > arr[i+1]){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swaps++
      }
    }
    if(swaps === 0){
      sorted = true;
    }
  }
  return arr;
}
