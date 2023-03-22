const url = "https://mlb-teams-statistics-cjkop.onrender.com/api/v1.0/mlb_data"


let allData;
let allDataBT;

function optionChangedFY(newYear) {

    let optionYear = d3.select("#fieldingTeam");

    document.getElementById("fieldingTeam").innerHTML = "";

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

    let optionYearBT = d3.select("#battingTeam");

    document.getElementById("battingTeam").innerHTML = "";

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

    displayInfoBT(yearDataBT[0])

};

function optionChangedFT(newTeam) {

    let yearFT = d3.select("#fieldingYear").node().value

    for (let i = 0; i < allData.length; i++) {
        if (allData[i].year == yearFT && allData[i].team_name == newTeam) {
            displayInfo(allData[i])
        }
    }
};

function optionChangedBT(newTeamBT) {

    let yearBT = d3.select("#battingYear").node().value

    for (let i = 0; i < allDataBT.length; i++) {
        if (allDataBT[i].year == yearBT && allDataBT[i].team_name == newTeamBT) {
            displayInfoBT(allDataBT[i])
        }
    }
};

function displayInfo(id) {

    let display = d3.select("#fieldingTeamStats")

    display.html("");

    let ftStats = {
        'Games Played': id.games_played, 'Fielding Percentage': id.fielding_percentage, 'Double Plays': id.double_plays, 'Saves': id.saves, 'ERA': id.earned_run_average, 'Complete Games': id.complete_games,
        'Strikeouts': id.strikeouts_by_pitchers, 'Errors': id.errors, 'Hits Allowed': id.hits_allowed, 'Homeruns Allowed': id.homeruns_allowed, 'Run Scored Against': id.opponents_runs_scored,
        'Shutouts': id.shutouts, 'Walks Allowed': id.walks_allowed
    };

    Object.entries(ftStats).forEach(([key, value]) => {
        display.append("h5").text(`${key}: ${value}`)
    });

}

function displayInfoBT(idBT) {

    let displayBT = d3.select("#battingTeamStats")

    displayBT.html("");

    let btStats = {
        'Games Played': idBT.games_played, 'At Bats': idBT.at_bats, 'Hit by Pitch': idBT.batters_hit_by_pitch, 'Caught Stealing': idBT.caught_stealing, 'Doubles': idBT.doubles, 'Triples': idBT.triples, 'Homeruns': idBT.homeruns,
        'Runs Scored': idBT.runs_scored, 'Sacrifice Flies': idBT.sacrifice_flies, 'Stolen Bases': idBT.stolen_bases, 'Walks': idBT.walks, 'Strikeouts': idBT.strikeouts_by_batters
    };

    Object.entries(btStats).forEach(([key, value]) => {
        displayBT.append("h5").text(`${key}: ${value}`)
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
    });
};

init();
