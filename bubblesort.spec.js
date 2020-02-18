describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array of length 1', function(){
    expect( bubbleSort([2]) ).toEqual( [2] );
  })

  it('handles an array of length 2', function(){
    expect( bubbleSort( [10, 3]) ).toEqual( [3, 10] );
  })

  it('handles an array with multiple items', function(){
    expect( bubbleSort( [10, 3, 23, 5, 7, 9] )).toEqual( [3, 5, 7, 9, 10, 23] );
  })
});
