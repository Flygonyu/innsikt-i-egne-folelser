function changeView(selectedPage) {
	model.app.currentPage = selectedPage;
	viewSelector();
}

function findDate(value) {
	let newDate = new Date();
	let shortDate = newDate.toLocaleDateString("nb-no");
	let thisDay = newDate.getDay();
	let tempHours = newDate.getHours().toString();
	let hours = tempHours.length > 1 ? tempHours : '0' + tempHours;
	let tempMinutes = newDate.getMinutes().toString();
	let minutes = tempMinutes.length > 1 ? tempMinutes : '0' + tempMinutes;
	let timeStamp = hours + ":" + minutes;
	const days = [
		"Søndag",
		"Mandag",
		"Tirsdag",
		"Onsdag",
		"Torsdag",
		"Fredag",
		"Lørdag",
	];
	if (value === "date") return shortDate;
	if (value === "timeStamp") return timeStamp;
	if (value === "thisDay") return days[thisDay];
}


// funksjoner for instillinger

function updateLoca() {
viewSelector();
}

function makePersonal(index) {
	if (model.users[index].isPersonal === true) {
		model.users[index].isPersonal = false;	
	} 
	else 
		model.users[index].isPersonal = true;
}