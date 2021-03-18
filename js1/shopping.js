
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

  const list_obj = data.map(entry => {
    const [name, category, edibility, price] = entry;
    return {
      name, category, isEdible: edibility === 'isEdible', price,
    };
  });
  return list_obj;
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

/* return list of items of given category eg: 'Fruit' | 'Appliance'
 * sample input: objList, 'Fruit'
 * output for sample input:
 *  [ 
 *    { name: 'apple', category: 'Fruit', isEdible: true, price: 40 },
 *    { name: 'Banana', category: 'Fruit', isEdible: true, price: 14 },
 * ]
 */
function selectByCatergory(list, field) {
  const result = list.filter(entry => entry.category === field);
  return result;

}

const list = createListOfObjects(sampleData);
console.log("Display list", list, "\n");
console.log("Sorted list by field ", sortListOfObjectsByField(list, 'price'), "\n");
console.log("Sorted through category Fruit", selectByCatergory(list, 'Fruit'), "\n");

console.log("Sorted through category Stationary", selectByCatergory(list, 'Stationary'), "\n");

console.log("Sorted through category Appliance", selectByCatergory(list, 'Appliance'), "\n");




