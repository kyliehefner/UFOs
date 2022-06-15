// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select('tbody');

// Create a function to build UFO sightings table
function buildTable(data) {
    // Clear existing data from table
    tbody.html("");

    // Loop through each object in data array
    data.forEach((dataRow) => {
        let row = tbody.append("tr"); // append row

        // Get each sighting and loop through values
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td"); // append cell
            cell.text(val); // fill cell
        });
    });
}