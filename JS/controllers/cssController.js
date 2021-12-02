const root = document.documentElement.style;

function colorChanger(value) {
	let index = model.app.userIndex;
	let color = model.users[index].instillinger.colorChooser;

model.users[index].instillinger.colorChooser = value;

updateColor();
}


function updateColor(value) {
	let index = model.app.userIndex;
	let color;
	
	if (value === "standard") {
		color = "standard"
	} else color = model.users[index].instillinger.colorChooser;

	if (color === "standard") {
		baseColor = 'hsl(103, 44%, 75%)';
		mainColor = 'hsl(103, 40%, 88%)';
		headerColor = 'hsl(0, 0%, 100%)';
		borderColor = 'hsl(114, 12%, 49%)';
		buttonColor = 'hsl(97, 58%, 81%)';
		btnHightlight = 'rgb(199, 212, 187)';
		btnHightlightBorder = 'hsl(81, 44%, 30%)';
		buttonColorNav = 'hsla(108, 19%, 41%, 0.9)';
		sliderBackground = 'hsl(120, 100%, 11%)';
		sliderButton = 'hsl(120, 100%, 25%)';
		inputColor = 'white';
		txtColor = 'hsl(0, 0%, 0%)';
		inputText = 'rgb(0, 0, 0)';
		txtShadow = 'rgb(53, 53, 53)';
		checkColor = 'hue-rotate(220deg)';
		borderLines = 'rgba(47, 65, 27, 0.692)';
	}
	if (color === "mørk") {
		baseColor = "hsl(0, 0%, 30%)"  
		mainColor = "hsl(0, 0%, 10%)";
		headerColor = "hsl(0, 0%, 100%)";
		borderColor = "hsl(0, 0%, 50%)";
		buttonColor = "hsl(0, 0%, 5%)";
		btnHightlight = "hsl(0, 0%, 20%)";
		btnHightlightBorder = "hsl(0, 0%, 40%)";
		buttonColorNav = "hsla(0, 0%, 5%, 0.9)";
		sliderBackground = "hsl(0, 0%, 5%)";
		sliderButton = "hsl(0, 0%, 35%)";
		inputColor = "hsl(0, 0%, 50%)";
		txtColor = 'hsl(0, 0%, 100%)';
		inputText = "hsl(0, 0%, 100%)";
		txtShadow = 'rgb(53, 53, 53)';
		checkColor = 'hue-rotate(180deg)';
		borderLines = 'rgba(109, 73, 19, 0.692)';
	}
	
root.setProperty('--baseColor', baseColor);
root.setProperty('--mainColor', mainColor);
root.setProperty('--buttonColor', buttonColor);
root.setProperty('--headerColor', headerColor);
root.setProperty('--borderColor', borderColor);
root.setProperty('--buttonColorNav', buttonColorNav);
// root.setProperty('--navBtnText', navBtnText);
root.setProperty('--btnHightlight', btnHightlight);
root.setProperty('--btnHightlightBorder', btnHightlightBorder);
root.setProperty('--sliderBackground', sliderBackground);
root.setProperty('--sliderButton', sliderButton);
// root.setProperty('--sliderShadow', sliderShadow);
root.setProperty('--inputText', inputText);
root.setProperty('--txtColor', txtColor);
root.setProperty('--txtShadow', txtShadow);
root.setProperty('--inputColor', inputColor);
root.setProperty('--checkColor', checkColor);
root.setProperty('--borderLines', borderLines);
}

function themeChooser(value) {
	let index = model.app.userIndex;
	let theme = model.users[index].instillinger.themeChooser;

	
model.users[index].instillinger.themeChooser = value;
updateBorder();

}
function updateBorder(value) {
	let index = model.app.userIndex;
	let theme;

	if (value === "square") {
		theme = "square"
	} else theme = model.users[index].instillinger.themeChooser;

	if (theme === "pill") {		
		borderRadius = "99999px";
	}
	if (theme === "square") {
		borderRadius = "1px";
	}
	if (theme === "medium") {
		borderRadius = "5px";
	}

	root.setProperty('--borderRadius', borderRadius);
}


function getCssClass(element, id, sub) {
	if (element == "triggers") {
		highlightTriggers(id);
	} else if (element == "feels") {
		highlightFeels(id);
	} else if (element == "location") {
		highlightLocation(id);
	} else if (element == 'subFeel') {
		highlightSubFeels(id, sub);
	}
}

function highlightTriggers(id) {
	let triggers = model.triggers;
	if (!triggers[id].class) {
		triggers[id].class = "chosen";
	} else {
		delete triggers[id].class;
	}
}

function highlightFeels(id) {
	let feels = model.feelings;

	for (let i = 0; i < feels.length; i++) {
		if (feels[i].class === "chosen") {
			delete feels[i].class;
		}
	}
	if (!feels[id].class) {
		feels[id].class = "chosen";
	} else {
		delete feels[id].class;
	}
}

function highlightSubFeels(id, sub) {
let subfeelClass = model.feelings[id].subFeels[sub];
	
	if (!subfeelClass.class){
		subfeelClass.class = "chosen";
	} else {
		delete subfeelClass.class;
	}
}


function highlightLocation(id) {
	let index = model.app.userIndex;
	let loca = model.users[index].instillinger.locations;

	for (let i = 0; i < loca.length; i++) {
		if (loca[i].class === "chosen") {
			delete loca[i].class;
		}
	}
	if (!loca[id].class) {
		loca[id].class = "chosen";
	} else {
		delete loca[id].class;
	}
}
