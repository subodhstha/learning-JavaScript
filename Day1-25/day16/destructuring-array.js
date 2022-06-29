const planets = ["sun", "Moon", "Jupiter"];
const shadowPlanets = ["Rahu", "Ketu", "XYZ"];

const [a, b,c,d= "ABC"] = shadowPlanets;
// console.log(a,b);
// console.log(a,d);

// const allPlanets = [...planets,...shadowPlanets, "Venus"]

const [planet1, planet2, ...planet] = planets

// console.log(allPlanets);
console.log(planet1, planet2, planet);