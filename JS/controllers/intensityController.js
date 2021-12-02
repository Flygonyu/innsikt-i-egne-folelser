function addStrength(strength) {
	model.newExperience.feelings[0].value = strength;
	model.app.disable = "";
	viewSelector();
}

function addSubFeel(value){
	let subFeel = model.newExperience.feelings[0].subFeels;
if (subFeel.includes(value)) {
	let subIndex = model.newExperience.feelings[0].subFeels.findIndex((x) => x === value);
	subFeel.splice(subIndex, 1);
} else {
	subFeel.push(value);
}
viewSelector();
}