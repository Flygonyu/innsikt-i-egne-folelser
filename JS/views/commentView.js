function commentView() {
	let id = model.overView.selectedId;
	let index = model.experiences.findIndex((x) => x.id == id);
	let com = model.experiences[index].comments;
	let cUser = model.app.currentUser;
	let adminChk = model.users.find((x) => x.userName == cUser);


	let html = "";
	html += `
	<div class="header">`
	if (adminChk.isAdmin === true){
		html += `<h2 class="startHeader">Brukeren sine tanker rundt hendelsen</h2>
		<p class="beskrivelse">Ønsker du å kommentere noe, eller prate med brukeren </br>
			Bruk dialog på forrige side</p>`;

	  } else {
		html += `<h2 class="startHeader">Tanker rundt hendelsen</h2>
			<p class="beskrivelse">Her kan du fortelle litt mer om hendelsen </br>
			"Beskriv hvordan følelsen kjentes ut?" </br>
			"Hvordan valgte du å forholde deg til den følelsen?"</p>`
		}

	html += `</div>`;



	html += `
	<div class="mainContent">
		<div class="scroll">
			<div id="comments"> </br>
					<div class="scrollBottom">`;
		

		// LOOP FOR Å LEGGE INN KUN 1 AV HVER DATO I DATES ARRAY
		let dates = [];
		for (let i = 0; i < com.length; i++) {
			if (!dates.includes(com[i].date)){
				dates.push(com[i].date);
			}
		}

		// LOOP FOR Å TEGNE OPP DATO + KOMMENTARER
		for (let i = 0; i < dates.length; i++) {
			let tempDate = dates[i];
			html += `<div class="chatDate">${dates[i] != undefined ? `<hr>${dates[i]}` : ''}</div>`;
			for (let j = 0; j < com.length; j++) {
				if (tempDate == com[j].date) {
					if(com[j].text != undefined) {
					html += `<div id="commentInfo"><small><i>
					${com[j].time != undefined ? `${com[j].time}:` : ''} </i></small><br> 
					${com[j].text != undefined ? `${com[j].text}</br>` : ''} 
					</div>`;
					}
				}
			}
		}

	
	
		html += `<div id="bottomScroll"></div><br></br>`
	html+= `
				</div>
			</div>	
		</div>`; 
		if (!adminChk.isAdmin) {
			html += `
				<input id="chatInput" class="" type="text" id="" name=""> 
				<button id="add" class="" onclick="newComment(${index})">SEND</button>`;
			}

    html += `
		
	</div></div></hr>`;
	
	
	
	html += `
	<div id="" class="footer">
			<div class="navButtons">
				<button class="back" onclick="changeView('singleExperience')"><span class="flipH">&#10095;</span>&nbsp tilbake</button>
				<button onclick="changeView('minSide')" class="cancel">Min side</button>
				<button class="hiddenButTakingSpace next">neste &nbsp&#10095;</button>
			</div> 
	</div>`

	return html;
}

function newComment(index) {
	let object = {
		date: findDate("date"),
		time: findDate("timeStamp"),
		text: chatInput.value,
	};
	if (chatInput.value != '') {
	model.experiences[index].comments.push(object);
	viewSelector();
}}
