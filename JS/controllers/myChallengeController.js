function addChallenge() {
	let index = model.app.userIndex;
	let challenge = model.challenges;
  let users = model.users;
	// remove active challenge - for den aktive brukeren
	if (users[index].challenges.length > 0) {
		for (let j = 0; j < users[index].challenges.length; j++) {
			let chalId = users[index].challenges[j];
			if (challenge.length > 0) {
				for (let i = 0; i < challenge.length; i++) {
					if (chalId == challenge[i].id) {
						challenge[i].isActive = false;
					}
				}
			}
		}
	}
	// make and push new active challenge
	if (model.challengeInput === '' || model.challengeInput === undefined) return
	else {
	let newId = findChallengeId();
	model.challenges.push({
		id: newId,
		text: model.challengeInput,
		isActive: true,
	});
	users[index].challenges.push(newId);
	// clean input
	model.challengeInput = "";
	viewSelector();
}
}

function makeActive(index) {
  let userIndex = model.app.userIndex;
	let challenge = model.challenges;
  let users = model.users;
	// remove all active challenges - for den aktive brukeren
  if (users[userIndex].challenges.length > 0) {
		for (let j = 0; j < users[userIndex].challenges.length; j++) {
			let chalId = users[userIndex].challenges[j];
			if (challenge.length > 0) {
				for (let i = 0; i < challenge.length; i++) {
					if (chalId == challenge[i].id) {
						challenge[i].isActive = false;
					}
				}
			}
		}
		// add the new active challeng
		model.challenges[index].isActive = true;
  } 
viewSelector();
}

// find new id before new challenge is pushed.
function findChallengeId() {
	let challenge = model.challenges;
	let newIndex = 1;
	let lastIndex = challenge.length - 1; // 2
	if (model.challenges.length > 0) newIndex = model.challenges[lastIndex].id + 1;
	return newIndex;
}

function deleteChallenge(id, index) {
	let userIndex = model.app.userIndex;
	if (confirm("Vil du slette denne utfordringen?")) {
    model.challenges.splice(index, 1)
		model.users[userIndex].challenges = model.users[userIndex].challenges.filter((x) => x != id);
		// sletter challenge "by Id" i både user sitt array og objektet i challenge array.
	}
	viewSelector();
}


