// Read in data - due to browser issues, I converted the samples file to JavaScript
// d3.json("samples.json").then(function(data) {
//     console.log(data);
//     let subjectIDs = data.names;
//     console.log(subjectIDs);
//     let demographic = data.metadata;
//     console.log(demographic);
//     let sample_data = data.samples;
//     console.log(sample_data);
// });

// Read in data from samples.js file
let subjectIDs = Object.values(data.names);
console.log(subjectIDs);
let demographic = Object.values(data.metadata);
console.log(demographic);
let sample_data = Object.values(data.samples);
console.log(sample_data);

//Put test subject names in dropdown menu
let ddmenu = d3.select("#selDataset");
for (subjectID of subjectIDs) {
    ddmenu.append("option").text(subjectID).property("value", subjectID);
};
// function to change ID .on("change", ID)?, then call chart and demographic table functions?

// Create horizontal bar chart
ID = "940";
//Filter data by ID number
let filteredSample = sample_data.filter(patient => patient.id === ID)[0];
console.log(filteredSample);

//Find sample_values for specific test subject
let patient_values = filteredSample.sample_values;
console.log(patient_values);
//Find otu_ids for specific test subject
let patient_otu_ids = filteredSample.otu_ids;
console.log(patient_otu_ids);
//Find otu_labels for specific test subject
let patient_labels = filteredSample.otu_labels;
console.log(patient_labels);

//Data for bar chart
let hbar = [
    {
    x: patient_values.slice(0, 10).reverse(),
    y: patient_otu_ids.slice(0, 10).reverse().map(otu => `OTU ${otu}`),
    text: patient_labels.slice(0, 10).reverse(),
    type: "bar",
    orientation: "h",
    }
];

//Layout for bar chart
let layout = {
    title: "Bacteria in Subject Belly Button",
};

//Render the plot to the bar id tag
Plotly.newPlot("bar", hbar, layout);

//Create bubble chart
//Data for the bubble chart
let bubble = [
    {
        x: patient_otu_ids,
        y: patient_values,
        text: patient_labels,
        mode: "markers",
        marker: {
            size: patient_values,
            color: patient_otu_ids,
        }
    }
];

//Layout for the bubble chart
let bubble_layout = {
    title: "Belly Button Sample Bacteria",
    xaxis: {
        title: "OTU IDs",
    }
};

//Render the chart to the bubble id tag
Plotly.newPlot("bubble", bubble, bubble_layout);



