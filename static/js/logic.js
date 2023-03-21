// const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
const url = "https://mlb-teams-statistics-cjkop.onrender.com/api/v1.0/mlb_data"
csvFile = "../../Resources/mlb_teams_classified.csv"

let allData;

function optionChangeYear(newYear) {

    let optionTeam = d3.select("#selTeam");

    console.log(optionTeam)
    // display.html("")
    document.getElementById("selTeam").innerHTML = "";

    yearData = []

    for (let i = 0; i < allData.length; i++) {
        if (allData[i].year == newYear) {
            yearData.push(allData[i])
        }
    }

    for (let j = 0; j < yearData.length; j++) {
        optionTeam.append("option")
            .text(yearData[j].team_name)
            .property("value", yearData[j].team_name)
    }

    displayInfo(yearData[0])

}

function optionChangeTeam(newTeam) {

    let year = d3.select("#selYear").node().value
    console.log(year)
    
    for (let i = 0; i < allData.length; i++) {
        if (allData[i].year == year && allData[i].team_name == newTeam) {
            displayInfo(allData[i])
        }
    }
    // chart(newSample)
    // gaugeChart(newSample)
}

// function getData(csvFile) {
//     d3.csv(csvFile).then(function(data) {
        
//     })
// }

function displayInfo(id) {
    // d3.json(url).then(function(data) {
        //console.log(data);
    
        // let teamName = data.team_name

        // let firstList = data[0]

        // console.log(teamName)

        // let sampleArray = teamName.filter(sample => sample.team_name == team_name);

        // let result = sampleArray[0];

    let display = d3.select("#sample-metadata")

    display.html("")

    Object.entries(id).forEach(([key, value]) => {
        display.append("h6").text(`${key}: ${value}`)
    })

    // console.log(sampleArray)

}

/****************************************************************************************************/

function init() {
    let optionYear = d3.select("#selYear");
    let optionTeam = d3.select("#selTeam");

    d3.json(url).then(function(data) {
        // console.log(data);
        allData = data

        // let names = data.team_name

        // console.log(names)
        myYears = []
        myTeams = []
        
        allData.forEach((sample) => {
            if (!myYears.includes(sample.year)) {

                myYears.push(sample.year);

                optionYear.append("option")
                    .text(sample.year)
                    .property("value", sample.year)

                // if (!myTeams.includes(sample.team_name)) {

                // }
            }
        });

        let optionTeam = d3.select("#selTeam");

        console.log(optionTeam)
        // display.html("")
        document.getElementById("selTeam").innerHTML = "";

        yearData = []

        for (let i = 0; i < allData.length; i++) {
            if (allData[i].year == myYears[0]) {
                yearData.push(allData[i])
            }
        }

        for (let j = 0; j < yearData.length; j++) {
            optionTeam.append("option")
                .text(yearData[j].team_name)
                .property("value", yearData[j].team_name)
        }

        displayInfo(yearData[0])
    });

}

init();
