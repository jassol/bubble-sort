function split(wholeArray) {
  if (wholeArray.length === 1){
    return wholeArray;
  }
  const midpoint = Math.ceil(wholeArray.length/2);
  const firstHalf = wholeArray.slice(0, midpoint);
  const secondHalf = wholeArray.slice(midpoint)

  return [firstHalf, secondHalf];
}

/*
//base case(s)?
One element Only: return element

*/

function mergeSort(arr) {

  //The splitting part
  if (arr.length===1) {
    return [arr];
  }
  else {
    let result = mergeSort(split(arr)[0]).concat(mergeSort(split(arr)[1]))
    console.log('//',result,'//')
  }

  // The merging part
  if (result.length===2) {
    return merge(result[0], result[1])
  }
  else if (result.length===1) {
    return result[0]
  }
  else {
    return merge( mergeSort(split(result)[0]), mergeSort(split(result)[1]))
  }

}


function merge(arr1, arr2) {
  let pointerOneIdx = 0
  let pointerTwoIdx = 0
  let result = []

  while (pointerOneIdx <= arr1.length || pointerTwoIdx <= arr2.length) {

    if (pointerOneIdx === arr1.length && pointerTwoIdx < arr2.length) {
      let restOfArray = arr2.slice(pointerTwoIdx)
      return result.concat(restOfArray)
    }
    else if (pointerTwoIdx === arr2.length && pointerOneIdx < arr1.length) {
      return result.concat(arr1.slice(pointerOneIdx))
    }

    else if (arr1[pointerOneIdx] < arr2[pointerTwoIdx]) {
      result.push(arr1[pointerOneIdx])
      pointerOneIdx++
    } else {
      result.push(arr2[pointerTwoIdx])
      pointerTwoIdx++
    }
  }

  return result;
}

