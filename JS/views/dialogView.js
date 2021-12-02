function dialogView() {
	let index = model.app.userIndex;
    let id = model.users[index].id;
	let cUser = model.app.currentUser;
	let adminChk = model.users.find((x) => x.userName == cUser);
	

	let html = "";
	html += `<div class="header">
    <h2>${adminChk.isAdmin ? `Dialog med ${model.users[index].firstName}` : 'Dialog med veileder'}</h2>
      <p class="beskrivelse">
	  ${adminChk.isAdmin ? 
		`Her kan du sende meldinger til brukeren` 
		: 
	  `Her kan du be om tips og råd, </br> lufte deg litt og prate med en veileder`}
	  </p>
  	</div>`;

	html += `
	<div class="mainContent">
		<div class="scroll">`;
			html += `
				<div id="comments" class=""></br>
						<div id="scrollBottom">`;
					// LOOP FOR Å LEGGE INN KUN 1 AV HVER DATO I DATES ARRAY
					let dates = [];

					for (let i = 0; i < model.chat.length; i++) {
						if (model.chat[i].chatId === id) {
						if (!dates.includes(model.chat[i].date)) {
							dates.push(model.chat[i].date);
						}
						}
					}

					// LOOP FOR Å TEGNE OPP DATO + KOMMENTARER
					for (let i = 0; i < dates.length; i++) {
						let tempDate = dates[i];
						html += `<hr><div class="chatDate">${dates[i] != undefined ? `${dates[i]}</div>` : ""}`;
						for (let j = 0; j < model.chat.length; j++) {
							if (model.chat[j].chatId === id) {
								if (tempDate == model.chat[j].date) {
								
									html += `<div id="chatInfo"><small><i>
									${model.chat[j].time != undefined ? `${model.chat[j].time} &nbsp ` : ""}
									${model.chat[j].user != undefined ? `${model.chat[j].user}: ` : ""}</i></small></br>
									${model.chat[j].text != undefined ? `${model.chat[j].text}</br>` : ""}</div>`;
								}
							}
						}
			}
			
	html += `<div id="bottomScroll"></div><br></br>
					</div>
				</div>
			</div>`; 

	
		html += `
        <input id="dialogInput" class="chatInput" type="text" id="" name=""> 
        <button id="add" class="" onclick="newChat(${index})">SEND</button>`;
	
	html += `</div></div></div></hr>`;

	html += `
	<div id="" class="footer">
			<div class="navButtons">`

			if (adminChk.isAdmin === true){
				html += `<button onclick="changeView('weekOverview')" class="back"><span class="flipH">&#10095;</span>&nbsp tilbake</button>`;
			  }

			html +=	`<button onclick="changeView('minSide')" class="cancel">Min side</button>`

			if (adminChk.isAdmin === true){
				html += `<button class="hiddenButTakingSpace next">Min side</button>`
			  }
			
	html += `
			</div> 
	</div>`

	return html;
}

function newChat(index) {
	let object = {
		id: chatNewId(),
		date: findDate("date"),
		time: findDate("timeStamp"),
		text: dialogInput.value,
		chatId: model.app.currentUser == "veileder" ? model.users[index].id : userId(),
		user: model.users[index].firstName,
	};
	if (dialogInput.value != '') {
	model.chat.push(object);
	viewSelector();
}}

function chatNewId() {
	let lastIndex = model.chat.length; 
	let newIndex = model.chat[lastIndex - 1].id + 1;
	return newIndex;
}

function userId() {
	let user = model.users.find((x) => x.userName == model.app.currentUser);
	return user.id;
}
