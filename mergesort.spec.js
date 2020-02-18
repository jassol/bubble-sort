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
