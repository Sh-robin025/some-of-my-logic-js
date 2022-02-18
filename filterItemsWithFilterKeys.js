// here i want to implement filter method with filterKeys.

const keys = ['com', 'ctg'];
// 'dhk,'com, 'ctg', 'raj', 'sly'

const allStack = [
  {
    id: 1,
    filterKeys: ['dhk', 'ctg'],
    value: 'itm one',
  },
  {
    id: 2,
    filterKeys: [],
    value: 'itm tow',
  },
  {
    id: 3,
    filterKeys: ['com', 'ctg'],
    value: 'itm three',
  },
  {
    id: 4,
    filterKeys: ['sly', 'dhk'],
    value: 'itm four',
  },
  {
    id: 5,
    filterKeys: ['raj', 'com'],
    value: 'itm five',
  },
  {
    id: 6,
    filterKeys: ['dhk'],
    value: 'itm six',
  },
];

// this is a method with << reduce >>
// const getFiltered = () => {
//   let filtered = [];
//   keys.map(key => {
//     allStack.map(stack => {
//       if (stack.filterKeys.includes(key)) {
//         filtered.push(stack);
//       }
//     });
//   });

//   const res = rmDupFromFiltered(filtered);
//   console.log(res);
// };

const rmDupFromFiltered = payload => {
  const finalResult = payload.reduce((prev, current) => {
    const x = prev.find(item => item.id === current.id);
    if (!x) {
      return prev.concat(current);
    } else {
      return prev;
    }
  }, []);
  return finalResult;
};

// finally this is without << reduce >>. simply << set >> method

const getFiltered = () => {
  let mySet = new Set();
  keys.map(key => {
    allStack.map(stack => {
      if (stack.filterKeys.includes(key)) {
        mySet.add(stack);
      }
    });
  });
  console.log([...mySet]);
};

getFiltered();
