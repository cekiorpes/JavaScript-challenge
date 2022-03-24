// Read in data - due to browser issues, I converted the samples file to JavaScript
// let data = d3.json("samples.json", function() {
//     console.log(data);
// });

// Read in data from samples.js file
let subjectID = Object.values(data.names);
console.log(subjectID);
let demographic = Object.values(data.metadata);
console.log(demographic);
let sample_data = Object.values(data.samples);
console.log(sample_data);

// Create horizontal bar chart
ID = "940";
let filteredSample = sample_data.filter(patient => patient.id === ID);
console.log(filteredSample);

let patient_values = filteredSample.map(p => p.sample_values);
console.log(patient_values);
// let slice_patient_values = patient_values.slice(0,10).reverse();
// console.log(slice_patient_values);
let patient_otu_ids = filteredSample.map(p => p.otu_ids);
console.log(patient_otu_ids);
let patient_labels = filteredSample.map(p => p.otu_labels);
console.log(patient_labels);

let hbar = [{
    x: patient_values,
    y: patient_otu_ids,
    text: patient_labels,
    type: "bar",
    orientation: "h",
}];

let layout = {
    title: "Bacteria in Subject Belly Button",
};

Plotly.newPlot("bar", hbar, layout);




