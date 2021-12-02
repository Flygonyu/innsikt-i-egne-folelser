let selectedLogin = 1;

function loginView() {
	let html = "";
	html += `<div class="loginContainer"> `;
	if (selectedLogin === 1) {
		html += `<h2>Logg inn:</h2>`;
		html += `
     
      
          
        <input 
		type="text" 
		id="loginInput"
		placeholder="Brukernavn" 
		name="username"
		onchange="model.login.userName = this.value" 
		required>  
        <br> 
          
        <input 
		type="password" 
		placeholder="Passord" 
		name="password" 
		oninput="model.login.pwd = this.value"
		required> 
        <br> 
        <input type="checkbox"> Husk meg 
        <br> 
        <button class="loginBtn" onclick="userLogin()" type="submit">Logg inn</button>   
        <button class="loginBtn" onclick="chooseLogin(2)" type="submit">Ny bruker?</button>     
        <br> 
        <a href="#">Glemt passord? </a>   
      
  `;

		html += `<div class="hensikt"><h3 id="hensiktH3">Hensikt med appen</h3>`;
		html += `<i class="hensikt">${model.hensiktApp}</i></div>`;
	
	} else if (selectedLogin === 2) {
		html += `<h2>Ny bruker:</h2>`;
		html += `   

           
        <input 
		type="text" 
		id="registerUsername"
		placeholder="Velg brukernavn" 
		name="username"
		onchange="model.newUser.userName = this.value" 
		required>

        <br> 

		   
        <input 
		type="text" 
		id="registerFirstName"
		placeholder="Sett inn Fornavn" 
		name="firstName"
		onchange="model.newUser.firstName = this.value" 
		required>

        <br>
		
		   
        <input 
		type="text" 
		id="registerLastName"
		placeholder="Sett inn Etternavn" 
		name="lastName"
		autocomplete="off"
		onchange="model.newUser.lastName = this.value" 
		required>

        <br> 

           
        <input 
		type="password" 
		placeholder="Lag Passord" 
		name="password" 
		autocomplete="off"
		oninput="model.newUser.pwd = this.value"
		required> 

        <br>
		
		  
        <input 
		type="password" 
		placeholder="Bekreft Passord" 
		name="password" 
		oninput="model.newUser.confirmPwd = this.value"
		required> 

        <br> 

        <button class="loginBtn" onclick="chooseLogin(1); registerCleanup()" type="submit">Avbryt</button>   
        <button class="loginBtn" onclick="createUser()" type="submit">Registrer</button>   
        <br>    
  `;


  html += `</div>`; // lukker login container

}

	return html;
}

	

