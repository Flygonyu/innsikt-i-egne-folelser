function locationView() {
	let index = model.app.userIndex;
	let loca = model.users[index].instillinger.locations;
	let html = "";
	html += `
	<div class="header">
     	<h2>Hvor skjedde dette?</h2>
		 <p class="beskrivelse" >Velg "annet" om ingen passer. </br>
		 	Du kan endre dine lokasjoner i innstillinger</p>
	</div>`;

	html += `
	<div class="mainContent">
		<div id="btnContainer">`;
			for (i = 0; i < loca.length; i++) {
				html += `<button 
				id="${loca[i].name}"
				class="${loca[i].class} regButton"
				onclick="getCssClass('location', ${i}); addLocation('${loca[i].name}')">
				${loca[i].name}
				</button>`;
			}

	html += `
		</div>
	</div>`;

			html += `
			<div id="" class="footer">
			<div id="" class="navButtons">
				<button onclick="changeView('intensityPage'); " class="back"><span class="flipH">&#10095;</span>&nbsp tilbake</button> 
					<button onclick="changeView('minSide'); modelCleanup()" class="cancel">Avbryt</button>
				<button ${model.newExperience.location === "" ? "disabled" : ""} onclick="changeView('triggerPage'); "  class="next">neste &nbsp&#10095;</button>
			</div>
			</div>
		 `;

	return html;
}


