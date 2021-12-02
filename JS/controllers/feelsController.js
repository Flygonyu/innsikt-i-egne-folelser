function addFeels(feel) {
	let feels = model.newExperience.feelings;
	if (feels.length == 0) {
		feels.push({ name: feel, value: 5, subFeels: [],});
	} else if (feels.length != 0) {
		model.newExperience.feelings = [{ name: feel, value: 5, subFeels: [],}];	
	}
	model.app.disable = "";
	viewSelector();
}

function addLocation(loca) {
	model.app.disable = "";
	model.newExperience.location = loca;
	viewSelector();
}