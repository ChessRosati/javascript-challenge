// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");


data.forEach((ufos) => {
    var row = tbody.append("tr"); // Add a row to the table for each iteration
    Object.entries(ufos).forEach(([key, value]) => {
        var cell = row.append("td"); // Make a new cell for each entry
        cell.text(value); // Fill in cell values
    });
});

