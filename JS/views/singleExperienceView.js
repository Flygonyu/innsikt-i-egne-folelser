function singleExperience(){
let cUser = model.app.currentUser;
let id = model.overView.selectedId;
let index = model.experiences.findIndex((x) => x.id == id);
let exp = model.experiences[index];


let html = "";
html += `
<div class="header">	
        <h2>${exp.comments[0].text ? exp.comments[0].text : exp.location}</h2>
</div>`
 
        html += `
        <div class="mainContent">`;
            
            html += `<div class="scroll"></br>
                    <div id=""><ins>${exp.feelings.length == 1 ? 'Følelse:' : 'Følelser:'}</ins></div> `
                        for(let j = 0; j < exp.feelings.length; j++) {     
                           html += `<div id="">${exp.feelings[j].name} - Styrke: ${exp.feelings[j].value} </div>`  
                        }
                    html += `<br><div id=""><ins>${exp.feelings[0].subFeels.length == 1 ? 'Underfølelse:' : 'Underfølelser:'}</ins></div>` 
                            for(let j = 0; j < exp.feelings[0].subFeels.length; j++) {     
                                html += `<div id="">${exp.feelings[0].subFeels[j]}</div>`  
                            } 
                    html+= `</br><div id=""><ins>${exp.triggers.length == 1 ? 'Trigger:' : 'Triggere:'}</ins></div> `
                        for (let u = 0; u < exp.triggers.length; u++) {                    
                            html += `<div id="">${exp.triggers[u]}</div>`  
                        }   
                    html+= `</br><div id=""><ins>Lokasjon:</ins></div>
                            <div id="">${exp.location}</div> </br>

                            <div id=""><ins>Tidspunkt:</ins></div>        
                            <div id="">${exp.day} ${exp.date} ${exp.time}</div>
                            </br>`

                    let adminChk = model.users.find((x) => x.userName == cUser);
                        if (adminChk.isAdmin === true){     
                        html+= `<div id=""><ins>Andre kommentarer:</ins></div>`          
                        for (let i = 0; i < exp.comments.length; i++) {
                            if (i >= 0) { 
                                html+= `<div id="">${exp.comments[i].text == undefined ? '' : exp.comments[i].text}</div>`
                            };
                            }
                        }
            html += `</br>
                </div>       
            
        </div>`;            
 
  html +=   `
	<div id="" class="footer">
	<div id="" class="navButtons">
	<button class="back" onclick="changeView('dayOverview')"><span class="flipH">&#10095;</span>&nbsp tilbake</button>
  	<button onclick="changeView('minSide')" class="cancel">Min side</button>
  	<button onclick="changeView('commentPage'); " class="back">LOGG</button>
  </div>
  </div>
	`;


	return html;
}

