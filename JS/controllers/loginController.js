function chooseLogin(value) {
	selectedLogin = value;
	viewSelector();
}

function userLogin() {
	let authenticatedUser = undefined;
	authenticatedUser = model.users.find((user) => model.login.userName == user.userName && model.login.pwd == user.pwd)
	if (authenticatedUser) {
		model.app.currentUser = authenticatedUser.userName;
		model.app.currentPage = "minSide";
		model.app.userIndex = model.users.findIndex((x) => x.userName == authenticatedUser.userName);
		viewSelector();
		updateColor();
		updateBorder();
		return;
	} else {
		alert("feil brukernavn eller passord");
		viewSelector();
		return;
	}
}


function createUser(){
	let user = model.newUser;
	let object = {
		id: createNewId(),
		userName: user.userName,
		firstName: user.firstName,
		lastName: user.lastName,
		pwd: user.pwd,
		isAdmin: user.isAdmin,
		isPersonal: false,
		register: [], 
		challenges: [],
		instillinger: {
			colorChooser: "standard",
			themeChooser: "square",
			locations:[
			{name: "Hjemme"},
			{name: "Jobb"},
			{name: "Butikk"},
			{name: "Transport"},
			{name: "Aktivitet"},
			{name: "Annet"},
			],
		}, 
	}

	if (
			(model.newUser.userName === '') ||
			(model.newUser.userName === undefined) || 
			(model.newUser.firstName === '') || 
			(model.newUser.firstName === undefined) || 
			(model.newUser.lastName === '') || 
			(model.newUser.lastName === undefined) || 
			(model.newUser.pwd === '') || 
			(model.newUser.pwd === undefined) || 
			(model.newUser.confirmPwd === '') ||
			(model.newUser.confirmPwd === undefined)){
				return alert('en eller flere felt er ikke fylt ut');
			} else {
				for (i = 0; i < model.users.length; i++){
					if (model.newUser.userName === model.users[i].userName) {
						return alert('brukernavnet er allerede i bruk');
					} 
			}
			if (model.newUser.pwd !== model.newUser.confirmPwd){
				return alert('Passord stemmer ikke med hverandre')
			} else{
			model.users.push(object);
			registerCleanup();
			selectedLogin = 1;
		}
		}
			
			
			
//statement som stopper hvis passord ikke stemmer
//hvis en eller flere felt mangler
//hvis username allerede er tatt


	
	
	viewSelector();
}

function createNewId() {
	let newId = 1;
	let lastIndex = model.users.length - 1;
	if (model.users.length > 0) newId = model.users[lastIndex].id + 1;
	return newId
}


function registerCleanup() {
	let user = model.newUser;
	user.userName = undefined;
	user.pwd = undefined;
	user.confirmPwd = undefined;
	user.firstName = undefined;
	user.lastName = undefined;
	user.isAdmin = false;
}

function logOut() {
	model.app.currentUser = "";
	updateColor("standard")
	updateBorder("square")
	modelCleanup();
	changeView("logIn");
}

function makeAdmin() {
	if (model.newUser.isAdmin === true) {
		model.newUser.isAdmin = false;	
	} 
	else {
	model.newUser.isAdmin = true;
	}
}