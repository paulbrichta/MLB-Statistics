let api_url = "https://mlb-teams-statistics-cjkop.onrender.com/api/v1.0/mlb_data";
// getData();
// mlb_data = parseURLParams(api_url);

fetch('https://mlb-teams-statistics-cjkop.onrender.com/api/v1.0/mlb_data')
    .then(res => res.json())
    .then((out) => {
        console.log('Output: ', out);
}).catch(err => console.error(err));


let base_url = window.location.href;
let parknames_url = `${base_url}/api/v1.0/mlb_data`;
// const statenames_url = `${base_url}/api/v1/states`;
let delay = ms => new Promise(res => setTimeout(res, ms));

// let Promise = d3.json(mlb_data);
    
console.log('Data Promise:', Promise)

function init() {

    // Creating a promise to read the data I will be using
        let Promise = d3.json(urlParams);
    
        console.log('Data Promise:', Promise)
    
    // Reading the json file and grabbing the names to put into the dropdown menu and selecting the dropdown menu from html - #selDataset
        d3.json(api_url).then(function (data) {
    
            let dropdownMenu = d3.select('#selDataset');
            let names = data.names;
            names.forEach((name) => {
                dropdownMenu.append('option').text(name).property('value', name);        
            });
    
    // Using the first sample in the list and creating initial charts and data
            let beginSample = team[0];
            buildPicture1(beginSample);
            buildPicture2(beginSample);
            buildTeam1(beginSample);
            buildTeam2(beginSample);
            buildStats1(beginSample);
            buildStats2(beginSample)
        });
    }
    
    // Creating a function to change charts upon #selDataset dropdown change
    function optionChanged(sampleX) {
        buildPicture1(sampleX);
        buildPicture2(sampleX);
        buildTeam1(sampleX);
        buildTeam2(sampleX);
        buildStats1(sampleX);
        buildStats2(sampleX)
    }
    
    init();

    function buildDemo(samples) {
    
        d3.json('samples.json').then((data) => {
    
            let demoBox = d3.select('#sample-metadata');
            let demoData = data.metadata;
            let information = demoData.filter(demoObject => demoObject.id == samples)[0];
    
            demoBox.html("");
    
            Object.entries(information).forEach(([key, type]) => {
                demoBox.append('h4').text(`${key.toUpperCase()}: ${type}`);
    
            });
        });
    }