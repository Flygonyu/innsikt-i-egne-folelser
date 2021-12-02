function dayOverview() {
	let date = model.overView.selectedDate;
	let day = model.overView.selectedDay;
	let index = model.app.userIndex;

	let html = "";
	html += `
	<div class="header">
			<h2>${day} ${date}</h2> 
			<p class="beskrivelse">Velg en hendelse du vil se nærmere på</p>
	</div>`;

	html += `
	<div class="mainContent">
		<div class="scroll">`;

		
		for (let i = 0; i < model.experiences.length; i++) {
			let exp = model.experiences[i];
			if (model.users[index].register.includes(exp.id)) {
				if (exp.date === date) {
					html += `<div onclick="setId('${
						exp.id
					}'); changeView('singleExperience')">${exp.time}  
					${description(exp)}  : `;

					for (let j = 0; j < exp.feelings.length; j++) {
						html += `${exp.feelings[j].name}  `;
					}
					html += `</div>`;
				}
			}
		};

		html += `
		</div>
	</div>`; 

	html += `
	<div id="" class="footer">
	<div id="" class="navButtons">
				<button class="back" onclick="changeView('weekOverview')"><span class="flipH">&#10095;</span>&nbsp tilbake</button>
  	<button onclick="changeView('minSide')" class="cancel">Min side</button>
  	<button class="hiddenButTakingSpace next">neste &nbsp&#10095;</button>
  </div>
  </div>
	`;

	return html;
}

function setId(id) {
	model.overView.selectedId = id;
}

function description(exp){
	let expTitle;
	if (exp.comments[0].text == undefined){
		expTitle = exp.location;
	} else if (exp.comments[0].text.length > 15){
		expTitle = exp.location;
	}
	else {
		expTitle = exp.comments[0].text
	}
	return expTitle;
}