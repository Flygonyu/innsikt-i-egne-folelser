function instillinger() {
	let index = model.app.userIndex;
	let cUser = model.app.currentUser;
	let loca = model.users[index].instillinger.locations;
	let isPersonal = model.users.find((x) => x.userName == cUser);
	let theme = model.users[index].instillinger.themeChooser;
	let color = model.users[index].instillinger.colorChooser;
	let html = "";
	html += `
	<div class="header">
  		<h2>Innstillinger</h2>
 		<p class="beskrivelse">Endre utseende på appen, eller bytt ut lokasjoner som ikke passer hverdagen din</p>
  	</div>`;
    

	html += `
	<div class="mainContent">
		<div id="instillinger">`;
			html += `
			<div>
				<div id="" class="">Farge og tema</div></br> 
					<select id="colorChooser" class="locaInput" value="" onchange="colorChanger(this.value)">
						<option class="locaInput" value="standard" ${color == 'standard' || color == '' ? 'selected' : ''}>Standard</option>
						<option class="locaInput" value="mørk"${color == 'mørk' ? 'selected' : ''}>Mørk</option>
						</select>
					<input class="c1" name="themeChooser" value="square" type="radio" ${theme == 'square' || theme == '' ? 'checked' : ''} onchange="themeChooser(value)"><label for="theme">Firkantet</label>
					<input class="c1" name="themeChooser" value="pill" type="radio" ${theme == 'pill' ? 'checked' : ''} onchange="themeChooser(value)"><label for="theme">Rund</label>
					<input class="c1" name="themeChooser" value="medium" type="radio" ${theme == 'medium' ? 'checked' : ''} onchange="themeChooser(value)"><label for="theme">Avrundet</label>
				</div>	
			<div>
			<br>
			</br>`
			let adminChk = model.users.find((x) => x.userName == cUser);
				if (adminChk.isAdmin === false){

				html += `<div id="" class="">Dine lokasjoner:</div></br>` 
				for (let i = 0; i < loca.length; i++) {
				html += `<input id="" class="locaInput" maxlength="10" type="text" oninput="model.users[${index}].instillinger.locations[${[i]}].name = this.value" placeholder="${loca[i].name}"></input>`
				}
			html += `<button id="instBtn" onclick="updateLoca()">Endre</button> ` 

			html += `<div id="" class="">
						<input type="checkbox" id="" class="c1" name="privat" value="" ${isPersonal.isPersonal === false ? '' : 'checked'} onchange="makePersonal(${index})">
						<label for="privat">Huk av om du ønsker at appen skal være personlig</label>
					</div>`
			}

		html += `
		</div>
	</div>
	`

	html += `</div>`
		
		html +=`
		<div id="" class="footer">
		<div id="" class="navButtons">
		  <button onclick="changeView('minSide')" class="cancel">Min side</button>
	  	</div>`
	html += `</div>`;






	return html;
}

