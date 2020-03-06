var fireballSize = 22,
wizardSpeed = 3,
wizardWidth = 70,
getFireballSpeed = function (left) {
	return left === true ? 5 : 2;
},
getWizardHeigth = function () {
	return 1.337 * wizardWidth;
},
getWizardX = function (width) {
	return (width - wizardWidth) / 2;
}
,
getWizardY = function (height) {
	return height / 2;
}