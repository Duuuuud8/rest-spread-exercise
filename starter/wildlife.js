/* Task 1: Track Animal Sightings */
function animalSightings (...animals) {
	console.log(animals.join(", "));
};
/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];

const allHabitats = [...forestHabitats, ...savannahHabitats];
console.log("Forest Habitats:", forestHabitats);
console.log("Savannah Habitats:", savannahHabitats);
console.log("Habitats:", allHabitats);
/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};

const rhinoNewStatus = {
	...rhinoStatus, 
	population : 450, 
	habitat : "captivity"
};
console.log("Rhinos Status:", rhinoStatus);
console.log("New Rhino Status:", rhinoNewStatus);
/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
/*
 * Observations:
 * The spread operator creates a shallow copy of the original object.
 * Changes to top-level primitive properties on the copied object do not
 * affect the original.
 * Nested objects are only shared by reference if they already exist on
 * the original object at the time of copying.
 */
const lionProfileCopy = {
	...lionProfile,
	genetics : {
		species : lionProfile.species,
		"Panthera Leo Leo" : true
	}
};
console.log("Leo Profile:", lionProfile);
console.log("New Leo:", lionProfileCopy);
/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
/*
 * Observations:
 * The spread operator creates a shallow copy of the original object.
 * If a nested object is also copied using the spread operator, changes to the
 * nested properties on the copy do not affect the original.
 * Dot notation cannot be used inside an object literal to modify nested
 * properties and must be used after the object is created.
 */
const ecosystemHealthCopy = {
	...ecosystemHealth,
	foodSupply : {
		...ecosystemHealth.foodSupply,
		herbivores : "Insufficient"
	}
};
console.log("Ecosystem Health:", ecosystemHealth);
console.log("Ecosystem Health Update:", ecosystemHealthCopy);