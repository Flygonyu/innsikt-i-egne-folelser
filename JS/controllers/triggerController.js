function addTriggers(trigger) {
	let triggers = model.newExperience.triggers;
	if (triggers.length < 1 || !triggers.includes(trigger)) {
		triggers.push(trigger);
	} else {
		triggers.splice(triggers.indexOf(trigger), 1);
	}
	viewSelector();
}
