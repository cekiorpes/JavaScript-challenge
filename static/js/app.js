// Read in data
let data = d3.json("samples.json", function() {
    let subjectID = Object.values(data.names);
    let demographic = Object.values(data.metadata);
    let sample_data = Object.values(data.samples);
});
