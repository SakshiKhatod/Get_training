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
    
  }
  var b={
    
    category:null,
   
  }
  var c=
  {
    
    isEdible:null,
  
  }
  var d=
  {
  
    price:0
  }

  for(var i=0;i<data.length;i++)
  {
    a.d1= data[i][1];
    b.d2=data[i][2];
    c.d3=data[i][3];
    d.d4=data[i][4];

  //var a=['apple','Lays','Pen','Book','Banana','Peanut Butter','Oven','Air Conditioner','Drill'];
}
console.log(a[1]);

}

//sort by given parameter. sorting Parameter eg: 'category' | 'price' etc
function sortList(sortingParameter)

//return list of items by category eg: 'Fruit' | 'Appliance'
function selectByCatergory(category)
