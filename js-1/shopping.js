const data = [
  ['apple', 'Fruit', 'isEdible', 40],
  ['Lays', 'Processed Food', 'isEdible', 10],
  ['Pen', 'Stationary', 'isNotEdible', 11],
  ['Book', 'Stationary', 'isNotEdible', 111],
  ['Banana', 'fruit', 'isEdible', 14],
  ['Peanut Butter', 'Processed Food', 'isEdible', 200],
  ['Oven', 'Appliance', 'isNotEdible', 1300],
  ['Air Conditioner', 'Applicance', 'isNotEdible', 13300],
  ['Drill', 'Power Tool', 'isNotEdible', 2200],
];


// Create a shopping items
// result = [ { name: 'apple', category: 'Fruit', isEdible: true, price: 40 }, ... ]
function createListOfObjects(data) {
  // console.log(data);
  var result = [];
  var entry = {
    name: null,
    category: null,
    isEdible: null,
    price: 0
  };
  for(i = 0; i < data.length; i++) {
    entry.name = data[i][1];
    entry.category = data[i][2];
    if(data[i][3] == "isEdible") {
      entry.isEdible = true;
    } else {
      entry.isEdible = false;
    }
    entry.price = data[i][4];
    result[i] = entry;
  }
  console.log(result);
  return result;
}
createListOfObjects(data);
//sort by given parameter. sorting Parameter eg: 'category' | 'price' etc
function sortList(sortingParameter) {}

//return list of items by category eg: 'Fruit' | 'Appliance'
function selectByCatergory(category) {}
