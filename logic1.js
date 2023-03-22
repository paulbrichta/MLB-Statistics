const url = "https://mlb-teams-statistics-cjkop.onrender.com/api/v1.0/mlb_data"


let allData;
let allDataBT;

function optionChangedFY(newYear) {

    let optionYear = d3.select("#fieldingYear");

    console.log(optionYear)

    document.getElementById("fieldingYear").innerHTML = "";

    yearData = []

    for (let i = 0; i < allData.length; i++) {
        if (allData[i].year == newYear) {
            yearData.push(allData[i])
        }
    }

    for (let j = 0; j < yearData.length; j++) {
        optionYear.append("option")
            .text(yearData[j].team_name)
            .property("value", yearData[j].team_name)
    }

    displayInfo(yearData[0])

};

function optionChangedBY(newYearBT) {

    let optionYearBT = d3.select("#battingYear");

    console.log(optionYearBT)

    document.getElementById("battingYear").innerHTML = "";

    yearDataBT = []

    for (let i = 0; i < allDataBT.length; i++) {
        if (allDataBT[i].year == newYearBT) {
            yearDataBT.push(allDataBT[i])
        }
    }

    for (let j = 0; j < yearDataBT.length; j++) {
        optionYearBT.append("option")
            .text(yearDataBT[j].team_name)
            .property("value", yearDataBT[j].team_name)
    }

    displayInfo(yearDataBT[0])

};

function optionChangedFT(newTeam) {

    let year = d3.select("#fieldingTeam").node().value
    console.log(year)

    for (let i = 0; i < allData.length; i++) {
        if (allData[i].year == year && allData[i].team_name == newTeam) {
            displayInfo(allData[i])
        }
    }
}

function optionChangedBT(newTeamBT) {

    let yearBT = d3.select("#battingTeam").node().value
    console.log(yearBT)

    for (let i = 0; i < allDataBT.length; i++) {
        if (allDataBT[i].year == yearBT && allDataBT[i].team_name == newTeamBT) {
            displayInfoBT(allDataBT[i])
        }
    }
}

function displayInfo(id) {

    let display = d3.select("#fieldingTeamStats")

    display.html("");

    Object.entries(id).forEach(([key, value]) => {
        display.append("h6").text(`${key}: ${value}`)
    });

}

function displayInfoBT(idBT) {

    let displayBT = d3.select("#battingTeamStats")

    displayBT.html("");

    let btStats = {'at_bats': idBT.at_bats};

    Object.entries(btStats).forEach(([key, value]) => {
        displayBT.append("h6").text(`${key}: ${value}`)
    });

}

function init() {
    let optionYear = d3.select("#fieldingYear");
    let optionTeam = d3.select("#fieldingTeam");
    let optionYearBT = d3.select("#battingYear");
    let optionTeamBT = d3.select("#battingTeam");

    d3.json(url).then(function (data) {
        allData = data
        allDataBT = data

        myYears = []
        myTeams = []
        myYearsBT = []
        myTeamsBT = []

        allData.forEach((sample) => {
            if (!myYears.includes(sample.year)) {

                myYears.push(sample.year);

                optionYear.append("option")
                    .text(sample.year)
                    .property("value", sample.year)

            }
        });

        allDataBT.forEach((sampleBT) => {
            if (!myYearsBT.includes(sampleBT.year)) {

                myYearsBT.push(sampleBT.year);

                optionYearBT.append("option")
                    .text(sampleBT.year)
                    .property("value", sampleBT.year)

            }
        });

        document.getElementById("fieldingTeam").innerHTML = "";

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
        // });

        document.getElementById("battingTeam").innerHTML = "";

        yearDataBT = []

        for (let i = 0; i < allDataBT.length; i++) {
            if (allDataBT[i].year == myYearsBT[0]) {
                yearDataBT.push(allDataBT[i])
            }
        }

        for (let j = 0; j < yearDataBT.length; j++) {
            optionTeamBT.append("option")
                .text(yearDataBT[j].team_name)
                .property("value", yearDataBT[j].team_name)
        }

        displayInfoBT(yearDataBT[0])
        console.log(yearBT[0])
    });
};

init();
