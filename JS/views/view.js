function viewSelector() {
	let html = loginInfo();
	const appDiv = document.getElementById("app");

	switch (model.app.currentPage) {
		case "logIn": // SKAL KUN LOGGE OSS INN
			html += loginView();
			break;

		case "minSide": // MIN SIDE - HERFRA SKAL EN KUNNE STARTE NY REGISTRERING, GÅ INN PÅ OVERSIKT OG EVT. SENERE KUNNE GÅ VIDERE TIL INNSTILLINGER
			html += minSide();
			break;

		case "myChallenge": // ALLE UTFORDRINGER SKAL VISES, KUNNE SLETTES, LEGGES TIL NY OG ENDRE AKTIV UTFORDRING
			html += myChallengeView();
			break;

		case "feelsPage": // HER VELGES 1 ELLER FLERE AV DE 6 HØVEDFEELSAAAAAA
			html += feelsView();
			break;

		case "intensityPage": // HER VELGER MAN MELLOM 1-10 I STYRKE MAN FØLER DEN SPESIFIKKE FØLELSEN
			html += intensityView();
			break;

		case "triggerPage": // HER VELGER MAN 1 ELLER FLERE TRIGGERS
			html += triggerView();
			break;

		case "locationPage": // HER VELGER MAN HVOR DETTE SKJEDDE, KAN KUN VELGE ETT STED
			html += locationView();
			break;

		case "commentPage": // BRUKES TIL Å UTDYPE ENKELTHENDELSEN MER
			appDiv.innerHTML =  commentView();
			document.getElementById('bottomScroll').scrollIntoView();
			return;

		case "newRegisterOverview": // FERDIGSTILLING AV EXP (KUN OPPSUMMERING OG FERDIGKNAPP?)
			html += newRegisterView();
			break;

		case "weekOverview": // UKENTLIG OVERSIKT
			html += weekOverview();
			break;

		case "dayOverview": // DAGLIG OVERSIKT
			html += dayOverview();
			break;

		case "singleExperience": // OVERSIKT OVER EN ENKELT HENDELSE
			html += singleExperience();
			break;

		case "dialogOverview": // GENEREL! DIALOG MELLOM BRUKER OG VEILEDER
			// html += dialogView();
			appDiv.innerHTML = dialogView();
			document.getElementById('bottomScroll').scrollIntoView();
			return;

		case "userOverview": // OVERSIKT OVER BRUKERE (KUN FOR VEILEDER)
			html += userOverview();
			break;

		case "instillinger": // INSTILLINGER
			html += instillinger();
			break;

		default:
			html = noPageFound();
	}

	appDiv.innerHTML = html;
	//legges i alle switcher vs html +=
}

function noPageFound() {
	let html = `
    404! Page not found!`;
		html += `
	<div id="" class="footer">
	<div id="" class="navButtons">
	<button class="hiddenButTakingSpace back" >🡄 tilbake</button>
  	<button onclick="changeView('minSide')" class="cancel">Min side</button>
  	<button class="hiddenButTakingSpace next">neste 🡆</button>
  </div>
  </div>
	`;

	return html;
}

function pageKnapper() {
	let html = "";
	html += `
    <select name="page" id="page-select" onchange="model.app.currentPage = this.value">
    <option value="">--Velg side--</option>
    <option value="logIn">logIn</option>
    <option value="minSide">minSide</option>
    <option value="myChallenge">myChallenge</option>
    <option value="feelsPage">feelsPage</option>
    <option value="intensityPage">intensityPage</option>
    <option value="triggerPage">triggerPage</option>
    <option value="locationPage">locationPage</option>
    <option value="newRegisterOverview">newRegisterOverview</option>
    <option value="dayOverview">dayOverview</option>
    <option value="singleExperience">singleExperience</option>
    <option value="commentPage">commentPage</option>
    <option value="userOverview">userOverview</option>
    <option value="weekOverview">weekOverview</option>
  </select>
  <button style="height:30px; width:50px" onclick="viewSelector()">Gå!</button>
  
  `;

	return html;
}

function loginInfo() {
	let html = "";
	let loggedUser = model.app.currentUser;
	html += `${
		loggedUser
			? `<div id="loginInfo">
					<div id="logInText"> Logget inn som: ${loggedUser} - <text class="logOut" onclick="logOut()"><b><ins>Logg ut</ins></b></text> 
					</div>
				</div>`
			: ""
	}`;

	return html;
}
