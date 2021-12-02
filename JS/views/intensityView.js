function intensityView() {
	let feeling = model.newExperience.feelings[0].name;
	let html = "";
	html += `
	<div class="header">
		<h2>Hvor sterkt føler du dette?</h2>
		<p class="beskrivelse" >Velg også en eller flere beskrivende følelser, om ønskelig</p>
	</div>
  `;

	html += `
	<div class="mainContent">
		<div id="sliders">`;
			let sliderValue = model.newExperience.feelings[0].value
			html += `<div class="feelingSlider">
			${feeling}
			<input class="intensitySlider" type="range" value="${sliderValue}" min="1" max="10" onchange="addStrength(this.value)">${
					sliderValue ? `${sliderValue}` : ""
				}<br>`;
			html += `</div>`; 

		
			let index = model.feelings.findIndex((x) => x.name === feeling) 
				for (let i = 0; i < model.feelings[index].subFeels.length; i++) {
				let subFeel = model.feelings[index].subFeels[i];
			
				html += `<button id="" class="${subFeel.class} regButton" onclick="getCssClass('subFeel', ${index}, ${i}); addSubFeel('${subFeel.name}')">${model.feelings[index].subFeels[i].name}</button>`
				}

	html += `
		</div>
	</div>`; // lukker sliders div


  html += `
	<div id="" class="footer">
		<div class="navButtons">
			<button onclick="changeView('feelsPage'); ${(model.app.disable = "")}" class="back"><span class="flipH">&#10095;</span>&nbsp tilbake</button>
			<button onclick="changeView('minSide'); modelCleanup()" class="cancel">Avbryt</button>
			<button ${model.app.disable} onclick="changeView('locationPage'); ${(model.app.disable = "disabled")}" class="next">neste &nbsp&#10095;</button>
  		</div>
  	</div>
	`;

	return html;
}


