function feelsView() {
	let html = "";
	html += `
	<div class="header">
  		<h2>Velg en følelse</h2>
 		<p class="beskrivelse">Hva føler du nå?</p>
  	</div>`;

	html += `
	<div class="mainContent">
		<div id="">`;

		
		for (i = 0; i < model.feelings.length; i++) {
			let feeling = model.feelings[i];
			html += `<button 
		id="${feeling.name}"
		class="${feeling.class} regButton"
		onclick="getCssClass('feels', ${i});addFeels('${feeling.name}')">
		${feeling.name}
		</button>`;
		}

	html += `
		</div>
	</div>`;


  html += `
	<div class="footer">
		<div class="navButtons">
			<button class="hiddenButTakingSpace navBtn back"><span class="flipH">&#10095;</span>&nbsp tilbake</button>
			<button class="navBtn cancel" onclick="changeView('minSide'); modelCleanup()" >Avbryt</button>
			<button class="navBtn next" ${model.newExperience.feelings.length != 0 ? '' : 'disabled'} onclick="changeView('intensityPage')">neste &nbsp&#10095;</button>
  		</div>
  	</div>
	`;

	return html;
}


// &#10137; right arrow, thin