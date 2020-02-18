describe('Split Array function', function() {
  it('is able to split an array of length one into two halves', function() {
    expect(split([1])).toEqual([1]);
  });
  it ('is able to split an array with odd number of elements into two halves', function(){
    expect(split([3, 5, 8])).toEqual([[3, 5], [8]]);
  });
  it ('is able to split an array with even number of elements into two halves', function(){
    expect(split([3, 5, 8, 10])).toEqual([[3, 5], [8, 10]]);
  });
});


describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function() {expect(merge([1,3,5],[2,4,6])).toEqual([1,2,3,4,5,6])
  });
  it('is able to merge two sorted arrays of different lengths', function() {expect(merge([1,3,5,7],[2,4,6])).toEqual([1,2,3,4,5,6,7])
  });
  it('is able to merge two sorted arrays in a non-alternating way', function() {expect(merge([1,2,3,7],[2,4,6])).toEqual([1,2,2,3,4,6,7])
  });
  it('is able to merge two sorted arrays in a non-alternating way', function() {expect(merge([1,2,3],[4,6,8,10])).toEqual([1,2,3,4,6,8,10])
  });
});

describe('Merge Sort function', function(){
  // it('testing the weird idea', function() {
  //   expect(mergeSort([1,2,3,4,5,6,7,8])).toEqual([[1],[2],[3],[4],[5],[6],[7],[8]])
  // });
  it('sorts 2 numbers', function() {
    expect(mergeSort([2,1])).toEqual([1,2])
  });
  it('sorts 3 numbers', function() {
    expect(mergeSort([1,2,0])).toEqual([0,1,2])
  });

});
