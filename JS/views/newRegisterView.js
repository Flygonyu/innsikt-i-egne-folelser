function newRegisterView() {
  let exp = model.newExperience;
  let html = "";
  html += `
  <div class="header">
    <h2>Oversikt</h2>
      <p class="beskrivelse">Legg gjerne til en kort forklaring på hva som skjedde, 
        og når du er fornøyd trykker du ferdig</p>
  </div>`;
      

  html += `
  <div class="mainContent">
    `;
    html += ` 
            <div id="comments " class="newReg"><br></br>`
            for (let i = 0; i < exp.feelings.length; i++) {
            html += `<div><ins>Følelse:</ins></div><div id="" class="">${exp.feelings[i].name} - Styrke: ${exp.feelings[i].value}</div></br> 
          `}

              if (exp.feelings[0].subFeels.length != 0) {
                html += `<div><ins>${exp.feelings[0].subFeels.length != 1 ? 'Underfølelser:' : 'Underfølelse:'}</ins></div>`;
								for (let i = 0; i < exp.feelings[0].subFeels.length; i++) {
                  let subFeel = exp.feelings[0].subFeels[i];
									html += `<div id="" class=""> ${subFeel}</div>`;
								}
							}
          html+=`
            <div id="" class=""><br><ins>Lokasjon:</ins> <br>${exp.location}</div></br>
            <div id="" class=""><ins>${exp.triggers.length != 1 ? 'Triggere: ' : 'Trigger: '}</ins></div>`; 
              for (let i = 0; i < exp.triggers.length; i++) {
              html+= ` <div>${exp.triggers[i]}</div>`}
            html+= `
           
            </br></div>
    
          <input id="chatInput" type="text"> 
          <button id="add" onclick="subComment()">FERDIG</button>
          <br>
          </div>
</div>
          
         

          <div id="" class="footer">
	        <div id="" class="navButtons">
            <button onclick="changeView('triggerPage'); " class="back"><span class="flipH">&#10095;</span>&nbsp tilbake</button> 
            <button onclick="changeView('minSide'); modelCleanup()" class="cancel">Avbryt</button>
            <button class="hiddenButTakingSpace next">neste &nbsp&#10095;</button>
          </div>
          </div>
          </hr>
               
   `;

  return html;
}
