function createBarber(name, earnings, haircuts) {
	return {name: name , earnings: earnings || 0, haircuts: haircuts || []}
}

function giveCompliment(haircut) {
	return `This ${haircut.style} looks great!`
}

function cutHair(barber, haircut) {
	barber.haircuts.push(haircut)
	barber.earnings += haircut.price
	return barber
}

function listStyles(barber,targetStyle) {
	let finalArray = []
	let hairstyles = barber.haircuts.filter((haircut) => haircut.hairLength === targetStyle)
	hairstyles.forEach(hairstyle => {
		finalArray.push(hairstyle.style)
	});
	return finalArray
}

module.exports = {
	createBarber, giveCompliment,cutHair, listStyles
};