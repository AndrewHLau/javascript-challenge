// from data.js
var tableData = data;

// Get a reference to the table body
// declare variable - tell you to start at tbody
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(data);

  // on load, create tableData
//create rows and columns based off data records
//forEach record - attach a row
	//forEach column - attach a cell using Object.entries


function buildTable(d) {
    var row = tbody.append('tr');
    Object.entries(d).forEach(([key, value]) => {
        var column = row.append('td').text(value);

	});
}

data.forEach(function(d) {
    var row = tbody.append('tr');
    Object.entries(d).forEach(([key, value]) => {
        var column = row.append('td').text(value);  

    });
});

//define a variable to get the input
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#filters");

//connect an event handler on click and on enter
// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

//connects to a function that will a) clear the data 
//b)filter the data c)display the data - in a table format
//then 
//create rows and columns based off FILTERED data records 
//forEach record - attach a row
	//forEach column - attach a cell using Object.entries

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
   d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  let ufoFilter = tableData

  //console.log(inputElement);

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

   console.log(inputValue);

  // Use the form input to filter the data by date
  // => is a shortcut for funtion and return
  // the d and the d. can be anything, they just need to match
  //var 
  ufoFilter = ufoFilter.filter(d => d.datetime == inputValue);
  
  var ufoFiltered = ufoFilter.map(ufo => ufo.datetime);
  var ufoFiltered1 = ufoFilter.map(ufo => ufo.city);
  var ufoFiltered2 = ufoFilter.map(ufo => ufo.state);
  var ufoFiltered3 = ufoFilter.map(ufo => ufo.country);
  var ufoFiltered4 = ufoFilter.map(ufo => ufo.shape);
  var ufoFiltered5 = ufoFilter.map(ufo => ufo.durationMinutes);
  var ufoFiltered6 = ufoFilter.map(ufo => ufo.comments);

  buildTable(ufoFiltered);
  buildTable(ufoFiltered1);
  buildTable(ufoFiltered2);
  buildTable(ufoFiltered3);
  buildTable(ufoFiltered4);
  buildTable(ufoFiltered5);
  buildTable(ufoFiltered6);


  console.log(ufoFilter);


  };

