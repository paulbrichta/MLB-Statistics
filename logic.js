const url = "https://mlb-teams-statistics-cjkop.onrender.com/api/v1.0/mlb_data"


let allData;
let allDataBT;

function optionChangedFY(newYear) {

    let optionTeam = d3.select("#fieldingTeam");

    console.log(optionTeam)

    document.getElementById("fieldingTeam").innerHTML = "";

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

function optionChangedFT(newTeam) {

    let year = d3.select("#fieldingYear").node().value
    console.log(year)
    
    for (let i = 0; i < allData.length; i++) {
        if (allData[i].year == year && allData[i].team_name == newTeam) {
            displayInfo(allData[i])
        }
    }
}


function displayInfo(id) {

    let display = d3.select("#fieldingTeamStats")

    display.html("")

    Object.entries(id).forEach(([key, value]) => {
        display.append("h6").text(`${key}: ${value}`)
    })

}

function optionChangedBY(newYearBT) {

    let optionTeamBT = d3.select("#battingYear");

    console.log(optionTeamBT)

    document.getElementById("battingYear").innerHTML = "";

    yearDataBY = []

    for (let i = 0; i < allData.length; i++) {
        if (allDataBT[i].year == newYearBT) {
            yearDataBY.push(allData[i])
        }
    }

    for (let j = 0; j < yearDataBY.length; j++) {
        optionTeamBT.append("option")
            .text(yearData[j].team_name)
            .property("value", yearDataBY[j].team_name)
    }

    displayInfo(yearDataBY[0])

}

// init();

function optionChangedBT(newTeamBT) {

    let yearBT = d3.select("#battingTeam").node().value
    console.log(yearBT)
    
    for (let i = 0; i < allData.length; i++) {
        if (allData[i].yearBT == yearBT && allData[i].team_name == newTeamBT) {
            displayInfo(allData[i])
        }
    }
}


function displayInfo(idBT) {

    let displayBT = d3.select("#battingTeamStats")

    displayBT.html("")

    Object.entries(idBT).forEach(([key, value]) => {
        displayBT.append("h6").text(`${key}: ${value}`)
    })

}

function init() {
    let optionYear = d3.select("#fieldingYear");
    let optionTeam = d3.select("#fieldingTeam");
    let optionYearBT = d3.select("#battingYear");
    let optionTeamBT = d3.select("#battingTeam");

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

        // let optionTeam = d3.select("#fieldingTeam");

        console.log(optionTeam)

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
    });

    // d3.json(url).then(function(data) {
        allDataBT = data

        myYearsBT = []
        myTeamsBT = []
        
        allDataBT.forEach((sample) => {
            if (!myYearsBT.includes(sample.year)) {

                myYearsBT.push(sample.year);

                optionYearBT.append("option")
                    .text(sample.year)
                    .property("value", sample.year)

            }
        // });

        // let optionTeam = d3.select("#fieldingTeam");

        console.log(optionYearBT)

        document.getElementById("battingTeam").innerHTML = "";

        yearDataBT = []

        for (let i = 0; i < allDataBT.length; i++) {
            if (allDataBT[i].year == myYearsBT[0]) {
                yearDataBT.push(allDataBT[i])
            }
        }

        for (let j = 0; j < yearDataBT.length; j++) {
            optionTeamBT.append("option")
                .text(yearData[j].team_name)
                .property("value", yearDataBT[j].team_name)
        }

        displayInfo(yearDataBT[0])
    });

}

init();

// }
// ____________________________________________________________________________________
// function optionChangedBY(newYearBT) {

//     let optionTeamBT = d3.select("#battingYear");

//     console.log(optionTeamBT)

//     document.getElementById("battingYear").innerHTML = "";

//     yearDataBY = []

//     for (let i = 0; i < allData.length; i++) {
//         if (allDataBT[i].year == newYearBT) {
//             yearDataBY.push(allData[i])
//         }
//     }

//     for (let j = 0; j < yearDataBY.length; j++) {
//         optionTeamBT.append("option")
//             .text(yearData[j].team_name)
//             .property("value", yearDataBY[j].team_name)
//     }

//     displayInfo(yearDataBY[0])

// }

// // init();

// function optionChangedBT(newTeamBT) {

//     let yearBT = d3.select("#battingTeam").node().value
//     console.log(yearBT)
    
//     for (let i = 0; i < allData.length; i++) {
//         if (allData[i].yearBT == yearBT && allData[i].team_name == newTeamBT) {
//             displayInfo(allData[i])
//         }
//     }
// }


// function displayInfo(idBT) {

//     let displayBT = d3.select("#battingTeamStats")

//     displayBT.html("")

//     Object.entries(idBT).forEach(([key, value]) => {
//         displayBT.append("h6").text(`${key}: ${value}`)
//     })

// }

// function init() {
//     let optionYearBT = d3.select("#battingYear");
//     let optionTeamBT = d3.select("#battingTeam");

//     d3.json(url).then(function(data) {
//         allDataBT = data

//         myYearsBT = []
//         myTeamsBT = []
        
//         allDataBT.forEach((sample) => {
//             if (!myYearsBT.includes(sample.year)) {

//                 myYearsBT.push(sample.year);

//                 optionYearBT.append("option")
//                     .text(sample.year)
//                     .property("value", sample.year)

//             }
//         });

//         // let optionTeam = d3.select("#fieldingTeam");

//         console.log(optionTeamBT)

//         document.getElementById("battingTeam").innerHTML = "";

//         yearData = []

//         for (let i = 0; i < allData.length; i++) {
//             if (allData[i].year == myYearsBT[0]) {
//                 yearData.push(allData[i])
//             }
//         }

//         for (let j = 0; j < yearData.length; j++) {
//             optionTeamBT.append("option")
//                 .text(yearData[j].team_name)
//                 .property("value", yearData[j].team_name)
//         }

//         displayInfo(yearData[0])
//     });

// }

// init();