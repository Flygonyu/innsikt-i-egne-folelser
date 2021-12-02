function cloneNewExp() {
	findNextId();
	model.newExperience.date = findDate("date")
	model.newExperience.time = findDate("timeStamp")
	model.newExperience.day = findDate("thisDay")
	const newExp = clone(model.newExperience);
	model.experiences.push(newExp);
	modelCleanup();
}
function clone(newExperience) {
	return JSON.parse(JSON.stringify(newExperience));
}
function findNextId() {
	let lastIndex;
	let newIndex = 1;
	if(model.experiences.length <= 0){
		model.newExperience.id = newIndex;
		model.users[model.app.userIndex].register.push(newIndex);
	} else {
		lastIndex = model.experiences.length;
		newIndex = model.experiences[lastIndex - 1].id + 1;
		model.newExperience.id = newIndex;
		model.users[model.app.userIndex].register.push(newIndex);
	}
}

function modelCleanup() {
	let exp = model.newExperience;
	let feelings = model.feelings;
	let loca = model.locations;
	let trigg = model.triggers;
	let feelsIndex; 
	if(model.newExperience.feelings.length > 0) {
		feelsIndex = model.feelings.findIndex((x) => x.name == model.newExperience.feelings[0].name);
		for (let i = 0; i < feelings[feelsIndex].subFeels.length; i++) {
			if (feelings[feelsIndex].subFeels[i].class) {
				delete feelings[feelsIndex].subFeels[i].class;
			}
		}
	}
	for (let i = 0; i < loca.length; i++) {
		if (loca[i].class) {
			delete loca[i].class;
		}
	}
	for (let i = 0; i < trigg.length; i++) {
		if (trigg[i].class) {
			delete trigg[i].class;
		}
	}
	for (let i = 0; i < feelings.length; i++) {
		if (feelings[i].class) {
			delete feelings[i].class;
		}
	}
	

	exp.feelings = [];
	exp.triggers = [];
	exp.id = "";
	exp.comments =[];
	exp.otherTrigger = "";
	exp.location = "";
	exp.time = "";
	exp.date = "";
	exp.day = "";
	exp.weekId = 1;

}

function subComment() {
	
	let object = {
		date: findDate("date"),
		time: findDate("timeStamp"),
		text: chatInput.value,
	};
	let blankObject = {
		date: undefined,
		time: undefined,
		text: undefined,
	};
	if(chatInput.value != "") {
	model.newExperience.comments.push(object);
	chatInput.value = "";
} else {
	model.newExperience.comments.push(blankObject)
	chatInput.value = "";
}
	cloneNewExp();
	changeView("weekOverview");
}


function expIdComment() {
	let lastIndex = model.experiences.length; // 2
	let newIndex = model.experiences[lastIndex - 1].id + 1;
	return newIndex;
}


