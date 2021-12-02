function myChallengeView() {
  let html = '';
  html += ` 
  	<div class="header">` 
		let challenge = model.challenges;
		let users = model.users;
		let index = model.app.userIndex;
		html += `
			<h2>Min utfordring:</h2>`;
		if (users[index].challenges.length > 0) {
		// looper igjennom brukers challenges, og finner riktige til å sette i view
			for (let j = 0; j < users[index].challenges.length; j++) {
				let chalId = users[index].challenges[j];
		// Setter ID på de aktuelle challenges
				if (challenge.length > 0) {
					for (let i = 0; i < challenge.length; i++) {
						if (chalId == challenge[i].id) {
							if (challenge[i].isActive) {
								html +=`<p class="currentChallenge">` 
								html += challenge[i].text 
								html += `</p>`;
							}
						}
					}
				}
			}
		};

	html += `</div>`
    
	html += `
	<div class="mainContent">
		<p id="challengeH3">Tidligere utfordringer:</p>
		<div class="scroll oldChal">
		`
			html+= ``;
			html+= ``;
			//samme som i active challenges:
			if (users[index].challenges.length > 0) {
				for (let j = 0; j < users[index].challenges.length; j++) {
					let chalId = users[index].challenges[j];
					if (challenge.length > 0) {
						for (let i = 0; i < challenge.length; i++) {
							if (chalId == challenge[i].id) {
								let text = challenge[i].text;
								html += `
					<div class="chalContainer">
						<div id="deleteChal" onClick="deleteChallenge(${challenge[i].id}, ${i})">x</div>
						<div id="activeChal" onclick="makeActive(${i})">
							<input type="checkbox" class="c1" ${challenge[i].isActive ? "checked" : ""}></>
						</div>
						<div id="chalText" onclick="makeActive(${i})">${text}</div>
					</div>`;
							}
						}
					}
				}
			}
	  	html += ` 
		</div>`;

			
		html += ` 
			<input id="challengeInput" class="chatInput" maxlength="50" type="text" id="" name="" onInput="model.challengeInput = this.value"> 
			<button id="addChallenge" class="add" onclick="addChallenge()">Legg til ny</button>`
			html += `
		</div>
	</div>`; 

    
	html += `
	<div id="" class="footer">
		<div id="" class="navButtons">
			<button class="back" onclick="changeView('minSide')"><span class="flipH">&#10095;</span>&nbsp tilbake</button>
			<button class="hiddenButTakingSpace cancel">Min side</button>
			<button class="hiddenButTakingSpace next">neste &nbsp&#10095;</button>
		</div>
	</div>`;
   return html;
 }


  




