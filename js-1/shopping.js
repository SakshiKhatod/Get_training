data = [
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
  var listOfObjects = [];
  var a={
    name:null,
    category:null,
   isEdible:null,
   price:0
    
  }
  
  for(var i=0;i<data.length;i++)
  {
    a.name= data[i][0];
    a.category=data[i][1];
    a.isEdible=data[i][2];
    a.price=data[i][3];
    listOfObjects[i]=a;
  //var a=['apple','Lays','Pen','Book','Banana','Peanut Butter','Oven','Air Conditioner','Drill'];
}
console.log(listOfObjects);


}


createListOfObjects(data);

//sort by given parameter. sorting Parameter eg: 'category' | 'price' etc
function sortList(sortingParameter)
{

}

//return list of items by category eg: 'Fruit' | 'Appliance'
function selectByCatergory(category)
{

}
