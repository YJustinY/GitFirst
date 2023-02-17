let request = new Request('https://swapi.dev/api/planets/');

// fetch(request).then(function(response) {
//   return response.text();
// }).then(function(text) {
//   var planets = JSON.parse(text);
//   console.log(planets.results[0].name)
// });
let planetsList = document.querySelector('ul.planetsList')
let newPlanet = document.createElement('li')

async function getPlanets(){
    let planetsRequest = await fetch(request)
    let planetsText = await planetsRequest.text()
    let planetsSet = JSON.parse(planetsText)
    let planets = planetsSet.results
    
    for(planets of planets){
        let newPlanet = document.createElement('li')
        newPlanet.innerText = planets.name
        planetsList.append(newPlanet)
    }
    
}

getPlanets()