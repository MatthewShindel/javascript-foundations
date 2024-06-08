

function oneToOne(s1, s2) {
	if(s1.length !== s2.length){
		return false;
	}
	const map1 = new Map()
	for(var i = 0; i < s1.length; i++){
		map1.set(s1[i], s2[i])
		console.log(map1);
	}
}

module.export = {oneToOne}