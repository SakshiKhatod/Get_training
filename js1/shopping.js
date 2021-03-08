const sampleData = [
  ['apple', 'Fruit', 'isEdible', 40],
  ['Lays', 'Processed Food', 'isEdible', 10],
  ['Pen', 'Stationary', 'isNotEdible', 11],
  ['Book', 'Stationary', 'isNotEdible', 111],
  ['Banana', 'Fruit', 'isEdible', 14],
  ['Peanut Butter', 'Processed Food', 'isEdible', 200],
  ['Oven', 'Appliance', 'isNotEdible', 1300],
  ['Air Conditioner', 'Applicance', 'isNotEdible', 13300],
  ['Drill', 'Power Tool', 'isNotEdible', 2200],
];

// Create a list of items
// result = [ { name: 'apple', category: 'Fruit', isEdible: true, price: 40 }, ... ]
function createListOfObjects(sampleData) {
    const result = sampleData.map(entry => {
      const [name, category, edibility, price] = entry;
      return {
        name,
        category,
        isEdible: edibility === 'isEdible',
        price
      }
    });
    return result;

  }
  
 
  
  
  function sortListOfObjectsByField(sampleData1,field)
  {
    const result = sampleData1.sort((a, b) => (a.field > b.field) ? 1 : (a.field < b.field) ? -1 : 0);
    return result;

     }


/* sort by given field. Sorting field eg: 'category' | 'price' etc
* sample input: createListOfObjects(sampleData), 'price'
* output for sample input:
* [
*   { name: 'Lays', category: 'Processed Food', isEdible: true, price: 10 },
*   { name: 'Pen', category: 'Stationary', isEdible: false, price: 11 },
*   { name: 'Banana', category: 'Fruit', isEdible: true, price: 14 },
*   { name: 'apple', category: 'Fruit', isEdible: true, price: 40 },
*   { name: 'Book', category: 'Stationary', isEdible: false, price: 111 },
*   ...
*   ...
* ]
*/ 

function selectByCatergory(list,field) 
{
        let output=sampleData1.filter(function(obj)
          {
                if(obj.category===field)
                {
                  return obj;
                }
          });
          return output;
}


console.log(createListOfObjects(sampleData));
const sampleData1 = createListOfObjects(sampleData);
console.log("-------------------------------------------------------------------");
console.log(sortListOfObjectsByField(sampleData1, 'price'));
console.log("-------------------------------------------------------------------");
console.log(selectByCatergory(sampleData1,'Fruit'));
/* sort by given field. Sorting field eg: 'category' | 'price' etc
* sample input: createListOfObjects(sampleData), 'price'
* output for sample input:
* [
*   { name: 'Lays', category: 'Processed Food', isEdible: true, price: 10 },
*   { name: 'Pen', category: 'Stationary', isEdible: false, price: 11 },
*   { name: 'Banana', category: 'Fruit', isEdible: true, price: 14 },
*   { name: 'apple', category: 'Fruit', isEdible: true, price: 40 },
*   { name: 'Book', category: 'Stationary', isEdible: false, price: 111 },
*   ...
*   ...
* ]
*/ 
function sortListOfObjectsByField(objList, field) {}

/* return list of items of given category eg: 'Fruit' | 'Appliance'
 * sample input: objList, 'Fruit'
 * output for sample input:
 *  [ 
 *    { name: 'apple', category: 'Fruit', isEdible: true, price: 40 },
 *    { name: 'Banana', category: 'Fruit', isEdible: true, price: 14 },
 * ]
 */
function selectByCatergory(category) {}

const list = createListOfObjects(sampleData);
console.log(sortListOfObjectsByField(list, 'price'));
console.log(selectByCatergory(list, 'Fruit'));
