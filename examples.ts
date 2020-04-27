/* Immutable data/ Referencial transparency */
// non-fp
{
  const hashObj = { a: 'a' };
  hashObj.b = 'b';

  const array = [0,1];
  array.push(2);
}

// fp
{
  const hashObj = {
    a: 'a'
  };
  const newHashObj = {...hashObj, b: 'b'}; 
  const newHashObj2 = Object.apply(hashObj, {b:'b'});
  // or could use JS Immutable
  
  const array = [0,1];
  const newArr = [...array, 2];
  const newArr2 = array.concat([2]);
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
  const added = addOrMultiply(true, 3);
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

/* no-class rules (no object-oriented design) */
{
  class Dog {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    get getAge(): number {
      return this.age;
    }
  }

  const dog = new  Dog('jack', 3);
  const dogAge = dog.getAge;
}

// fp
{
  const dog = {
    name: 'jack',
    age: 3
  };
  type Dog = typeof dog;

  const getAge = (dog: Dog) => dog.age; 
  const dogAge = getAge(dog);
}
