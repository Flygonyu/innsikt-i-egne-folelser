function triggerView() {
	let html = "";
	html += `
	<div class="header">
     	<h2>Velg en eller flere triggere:</h2>
		<p class="beskrivelse" >Velg "vet ikke" om ingen passer, </br>
			du kan skrive mer om hendelsen på neste side</p>
	</div>`;

	html += `
	<div class="mainContent">
			<div id="btnContainer">`;
			for (i = 0; i < model.triggers.length; i++) {
				let trigger = model.triggers[i];
				html += `<button 
				id="${trigger.name}"
				class="${trigger.class} regButton"
				onclick="getCssClass('triggers', ${i}); addTriggers('${trigger.name}')">
				${trigger.name}
				</button>`;
			}

	html += `
			</div>
	</div>`;

	html += `
	<div id="" class="footer">
	<div id="" class="navButtons">
         <button onclick="changeView('locationPage')" class="back"><span class="flipH">&#10095;</span>&nbsp tilbake</button> 
  			 <button onclick="changeView('minSide'); modelCleanup()" class="cancel">Avbryt</button>
         <button ${model.newExperience.triggers.length != 0 ? "" : "disabled"} onclick="changeView('newRegisterOverview')" class="next">neste &nbsp&#10095;</button>
     </div>
     </div>
		 `;

	return html;
}

