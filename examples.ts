/* eslint-disable @typescript-eslint/no-unused-vars */

/* Immutable data/ Referencial transparency */
// non-fp
{
  const hashObj = { a: 'a' };
  
  hashObj.b = 'b';
}

// fp
{
  const hashObj = {
    a: 'a'
  };

  const newHashObj = {...hashObj, b: 'b'}; // or could use JS Immutable
}

/* pure functions only */
// non-fp
{
  const arrayOutsideScope: number[] = [];

  const addElement = (a: number): void => {
    arrayOutsideScope.push(a); 
    // changes variable outside its method scope (non-pure) & does not return any value
  };

  addElement(3);
}

// fp
{
  const arrayOutsideScope: readonly number[] = [];

  const addElement = (a: number): readonly number[] => {
    return [...arrayOutsideScope, a];
  };

  const newArr = addElement(3);
}


/* no statements rule & expressions only */
// non-fp
{
  const addOrMultiply = (
    shouldAdd: boolean,
    value: number
  ): number => {
    let result: number; 

    if(shouldAdd){
      result = value + value;
    }else {
      result = value * value;
    }

    return result;
  }
 
  // both 
  addOrMultiply(true, 3);
  const multiplied = addOrMultiply(false, 3);

  // no for loop
  const someNumberArr = [0,2,3,4];
  let sum = 0;
  for(const ele of someNumberArr){
    sum += ele;
  }
}

// fp
{
  const add = (x: number): number =>
    x + x;
  
  const multiply = (x: number): number =>
    x * x;
  
  const addOrMultiply = (
    shouldAdd: boolean,
    value: number
  ): number => shouldAdd ? value + value: value * value;
 
  // both 
  const added = addOrMultiply(true, 4);
  const multiplied = addOrMultiply(false, 4);

  const someNumberArr = [0,2,3,4];
  const sum = someNumberArr.reduce((accumulator, current) => accumulator + current,0);
}