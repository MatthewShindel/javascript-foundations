var assert = require('chai').assert;

// Determine whether there exists a one-to-one character mapping from one string s1 to another s2.
// For example, given s1 = abc and s2 = bcd, return true since we can map a to b, b to c, and c to d.
// Given s1 = foo and s2 = bar, return false since the o cannot map to two characters.
// each letter on one string can be connected to another letter in another string
/*
initial tought, break up the string, into an array, make sure length is the same
three conditions, same length, can have duplicates, but each letter is associated with one other letter if it repeats
*/


function oneToOne(s1, s2) {
	if(s1.length !== s2.length){
		return false;
	}
	const map1 = new Map()
	const map2 =  new Map()
	for(var i = 0; i < s1.length; i++){
		let char1 = s1[i]// use this for code readability
		if(map1.has(s1[i])){
			if(map1.get(s1[i]) !== s2[i]){
				return false
			}
		}else{
			map1.set(s1[i], s2[i])
		}

		if(map2.has(s2[i])){
			if(map2.get(s2[i]) !== s1[i]){
				return false
			}
		}else{
			map2.set(s2[i], s1[i])
		}
	}

	return true
	// const map2 = new Map()
	// for(var i = 0; i < s2.length; i++){
	// 	if(map2.has(s2[i])){
	// 		if(map2.get(s2[i]) === s1[i]){
	// 			map2.set(s2[i], s1[i])
	// 		}else{
	// 			return false
	// 		}
	// 	}else{
	// 		map2.set(s2[i], s1[i])
	// 	}
	// }
}


describe('my suite', function() {
  it('tests', function () {
    assert.equal(oneToOne('abc', 'bcd'), true)
  });

  it('tests false', function () {
    assert.equal(oneToOne('foo', 'bar'), false)
  });

  it('tests empty', function() {
    assert.equal(oneToOne('', ''), true)
  });

  it('tests space', function() {
    assert.equal(oneToOne(' ', ' '), true)
  });

  it('tests double space', function() {
    assert.equal(oneToOne('  ', '  '), true)
  });
	
	it('tests double space false', function() {
    assert.equal(oneToOne('  ', ' a'), false)
  });

  it('tests bar foo', function() {
    assert.equal(oneToOne('bar', 'foo'), false)
  });
});