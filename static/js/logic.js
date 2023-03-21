const url = "https://mlb-teams-statistics-cjkop.onrender.com/api/v1.0/mlb_data"
csvFile = "../../Resources/mlb_teams_classified.csv"

let allData;

function optionChangeYear(newYear) {

    let optionTeam = d3.select("#selTeam");

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
    
    for (let i = 0; i < allData.length; i++) {
        if (allData[i].year == year && allData[i].team_name == newTeam) {
            displayInfo(allData[i])
        }
    }

}


function displayInfo(id) {
    let display = d3.select("#sample-metadata")

    display.html("")

    Object.entries(id).forEach(([key, value]) => {
        display.append("h6").text(`${key}: ${value}`)
    })

}

/****************************************************************************************************/

function init() {
    let optionYear = d3.select("#selYear");
    let optionTeam = d3.select("#selTeam");

    d3.json(url).then(function(data) {
        allData = data

        myYears = []
        myTeams = []
        
        allData.forEach((sample) => {
            if (!myYears.includes(sample.year)) {

                myYears.push(sample.year);

                optionYear.append("option")
                    .text(sample.year)
                    .property("value", sample.year)
            }
        });

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
