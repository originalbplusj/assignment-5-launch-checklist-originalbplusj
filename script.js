try {
    const { validateInput } = require("./scriptHelper");

    const { pickPlanet } = require("./scriptHelper");

    const { myFetch } = require("./scriptHelper");

    const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

    const { formSubmission } = require("./scriptHelper");
}
catch (error) { }



window.addEventListener("load", function () {




    let testForm = document.querySelector("form");
    testForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let pilotName = document.querySelector("input[name=pilotName]").value;
        let copilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        let faultyItemsList = document.getElementById("faultyItems");

        console.log(copilotName);
        console.log(validateInput(copilotName));

        formSubmission(document, faultyItemsList, pilotName, copilotName, fuelLevel, cargoMass);
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        let selectedPlanet = pickPlanet(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.


        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
    })

});