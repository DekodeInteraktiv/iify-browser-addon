function iify() {
	now = new Date();
	today = now.getDay();
	daywanted = 5;
	offset = today - daywanted;
	switch (offset) {
		case -1:
		case 6:
			return ("Almost.");
		case 0:
			return ("Yep.");
		case 1:
		case -6:
			return ("You just missed it.");
		default:
			return ("Nope.");
	}
}

document.querySelector('#isitfridayyet').innerHTML = iify();