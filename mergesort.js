function split(wholeArray) {
  if (wholeArray.length === 1){
    return wholeArray;
  }
  const midpoint = Math.ceil(wholeArray.length/2);
  const firstHalf = wholeArray.slice(0, midpoint);
  const secondHalf = wholeArray.slice(midpoint)

  return [firstHalf, secondHalf];
}
