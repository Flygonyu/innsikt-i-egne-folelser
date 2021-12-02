function userOverview(){
	let user = model.users;
	let index = model.users.findIndex((x) => x.id == user);
	let html = "";
	html += `
	<div class="header">
    		<h2>Oversikt over Brukere</h2>
			<p class="beskrivelse">For å gå videre trykk inn på aktuell bruker</p>
	</div>`;

	html += `
	<div class="mainContent">
		<div class="scroll"><br></br>
			`;

			html += ``;
			for(let i = 0; i < user.length; i++) {
				if(!user[i].isAdmin && !user[i].isPersonal)
				html += `
				<div id="" onclick="model.app.userIndex = ${i};
					changeView('weekOverview')">${user[i].firstName} ${user[i].lastName}</div> </br>`
			}

			html += ``;
			html += `</br>
			
		</div>
	</div>`;

	html += `
	<div id="" class="footer">
		<div id="" class="navButtons">
			<button class="hiddenButTakingSpace back" ><span class="flipH">&#10095;</span>&nbsp tilbake</button>
			<button onclick="changeView('minSide')" class="cancel">Min side</button>
			<button class="hiddenButTakingSpace next">neste &nbsp&#10095;</button>
		</div>
	</div>
	`;
	
	return html;
}