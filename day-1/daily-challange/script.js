
// let body = document.getElementsByTagName('body');
// let planetList = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

// for (planets of planetList){
//     let planet = document.createElement('div');
//     planet.innerHTML = planets;
//     body[0].appendChild(planet);
//     planet.setAttribute('class', 'planet');
//     planet.setAttribute('id', planets);
// }


// document.getElementById('Mercury').style.backgroundColor = "rgb(193,162,97)"
// document.getElementById('Venus').style.backgroundColor = "rgb(151,107,63)"
// document.getElementById('Earth').style.backgroundColor = "rgb(16,17,60)"
// document.getElementById('Mars').style.backgroundColor = "rgb(213,130,52)"
// document.getElementById('Jupiter').style.backgroundColor = "rgb(199,185,161)"
// document.getElementById('Saturn').style.backgroundColor = "rgb(245,199,127)"
// document.getElementById('Uranus').style.backgroundColor = "rgb(193,231,235)"
// document.getElementById('Neptune').style.backgroundColor = "rgb(73,133,255)"


let solarSystem = [
  {name: 'Mercury', moon: 0, color:"orange"},
  {name: 'Venus', moon: 0, color:"grey"},
  {name: 'Earth', moon: 1, color:"blue"},
  {name: 'Mars', moon: 2, color: 'red'},
  {name: 'Jupiter', moon: 79, color: 'brown'},
  {name: 'Saturan', moon: 82, color: 'yellow'},
  {name: 'Uranus',moon: 27, color:'lightblue'},
  {name: 'Neptune', moon: 14, color:'darkblue'}
]

let main = document.getElementById('listPlanets');
for (var i = 0; i < solarSystem.length; i++) {
  let planet = document.createElement('div');
  planet.classList.add('planet');
  planet.innerText = solarSystem[i].name;
  planet.style.backgroundColor = solarSystem[i].color;
  main.appendChild(planet)

  let moons = solarSystem[i].moon;
  let left = 0;
  for (let j = 0; j < moons; j++) {
    let moon = document.createElement('div');
    moon.classList.add('moon');
    moon.style.left = left + 'px';
    left +=15;
    planet.appendChild(moon);

  }
}