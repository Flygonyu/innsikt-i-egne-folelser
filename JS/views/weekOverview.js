function weekOverview() {
	let index = model.app.userIndex;

	let html = "";
	html += `
	<div class="header">
			<h2>Ukes oversikt</h2>
			<p class="beskrivelse">Velg aktuell dag</p>
	</div>`;

	html += `
	<div class="mainContent">
		<div class="scroll"></br>`;

			
			let drawWeek = [];
			for (let i = 0; i < model.users[index].register.length; i++) {
				let regId = model.users[index].register[i];
				let regIndex = model.experiences.findIndex((x) => x.id == regId);
				let day = model.experiences[regIndex].day;
				let date = model.experiences[regIndex].date;

				if (drawWeek.length < 1) {
					html += `<div class="chatDate" onclick="setDate('${date}', '${day}'); 
							changeView('dayOverview')">${day} ${date}(${checkCount(date)})</div>`;
					drawWeek.push(date);
				} else if (drawWeek.length != 0) {
					for (let j = 0; j < drawWeek.length; j++) {
						if (!drawWeek.includes(date)) {
							html += `<div onclick="setDate('${date}', '${day}'); 
							changeView('dayOverview')">${day} ${date}(${checkCount(date)})</div>`;
							drawWeek.push(date);
						} else break;
					};
				};
			};

		html += `</br>
			
		</div>
	</div>`;
	
	html += `
	<div id="" class="footer">
	<div id="" class="navButtons">`;
	let cUser = model.app.currentUser;
	let adminChk = model.users.find((x) => x.userName == cUser);
		if (adminChk.isAdmin === true){
		html += `<button onclick="changeView('userOverview')" class="back"><span class="flipH">&#10095;</span>&nbsp tilbake</button>`;
	}
  	html += `<button onclick="changeView('minSide')" class="cancel">Min side</button>`
	  if (adminChk.isAdmin === true){
	  html += `<button onclick="changeView('dialogOverview')" class="back">Dialog</button>`;
	}

	html +=   `
	</div>
  	</div>
	`;
	
	return html;
};


function checkCount(date) {
	let index = model.app.userIndex;
	let count = 0;
	for (let i = 0; i < model.experiences.length; i++) {
		let expId;
		if (model.experiences[i].date == date) {
			expId = model.experiences[i].id;
			for (let j = 0; j < model.users[index].register.length; j++) {
				if (expId == model.users[index].register[j]) {
					count++;
				}
			}
		}
	}
	return count;
}


function setDate(date, day) {
	model.overView.selectedDate = date;
	model.overView.selectedDay = day;
};
