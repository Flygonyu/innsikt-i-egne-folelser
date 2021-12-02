function minSide() {
	let cUser = model.app.currentUser;
	let index = model.app.userIndex;
	let users = model.users;
	let html = "";
	
	
	let adminChk = model.users.find((x) => x.userName == cUser);
	if (adminChk.isAdmin === false){
		html += `
		<div class="header">	
			<div class="startChallengeContainer">
				<h2 class="startHeader">Min side</h2>`;

				html += `<p class="beskrivelse">${model.users[index].challenges.length < 1 ? 'Legg til mål her' : 'Det jeg jobber med nå'}:</p>`;

					for (let j = 0; j < model.users[index].challenges.length; j++) {
						let chalId = users[index].challenges[j];
						for (let i = 0; i < model.challenges.length; i++) {
							if (chalId == model.challenges[i].id) {
								html += `<div class="currentChallenge">${model.challenges[i].isActive
										? "'" + model.challenges[i].text + "'"
										: ""
								}</div>`;
							}
						}
					}
				
		html += `<button onclick="changeView('myChallenge')" class="changeChallenge">${model.users[index].challenges.length < 1 ? 'Legg til' : 'Endre'}</button>`;
		html += `
			</div>		
		</div>`; 

		html += `
		<div class="mainContent">
				<button onclick="changeView('feelsPage')" class="startBtn">Registrer ny opplevelse</button><br>
				<button onclick="changeView('weekOverview')" class="startBtn">Oversikt</button><br>
				<button onclick="changeView('dialogOverview')" class="startBtn">Dialog</button><br>
				<button onclick="changeView('instillinger')" class="startBtn">Innstillinger</button>
		</div>`;
		
	} else if (adminChk.isAdmin === true){
		html += `
		<div class="header">
			<h2 class="startHeader">Min side</h2>
			<p class="beskrivelse"></p>
		</div>
	<div class="mainContent">
			<button onclick="changeView('userOverview')" class="startBtn">Oversikt over Brukere</button><br>
			<button onclick="changeView('instillinger')" class="startBtn">Innstillinger</button>
	</div>`; 
}

html += `<div class="footer"></div>`;
	return html;
}
