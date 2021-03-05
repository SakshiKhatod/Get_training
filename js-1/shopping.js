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
function createListOfObjects(data) {
  const result = data.map(entry => {
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

function sortListOfObjectsByField(objList, field) {
  const result = objList.sort((a, b) => (a[field] > b[field]) ? 1 : (a[field] < b[field]) ? -1 : 0);
  return result;
}
// objs.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0))
/* return list of items of given category eg: 'Fruit' | 'Appliance'
 * sample input: objList, 'Fruit'
 * output for sample input:
 *  [ 
 *    { name: 'apple', category: 'Fruit', isEdible: true, price: 40 },
 *    { name: 'Banana', category: 'Fruit', isEdible: true, price: 14 },
 * ]
 */

function selectByCatergory(objList, category) {
  const result = objList.filter(entry => entry.category === category);
  return result;
}

const list = createListOfObjects(sampleData);

console.log("*Sort------------------------------------------------------------------------*");
console.log("Sort by price - ", sortListOfObjectsByField(list, 'price'));
console.log("Sort by name - ", sortListOfObjectsByField(list, 'name'));
console.log("Sort by category - ", sortListOfObjectsByField(list, 'category'));
console.log("*Select by category------------------------------------------------------------------------*");
console.log("Select by Fruit - ", selectByCatergory(list, 'Fruit'));
console.log("Select by Stationary - ", selectByCatergory(list, 'Stationary'));
