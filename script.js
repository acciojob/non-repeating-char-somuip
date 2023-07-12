//your JS code here. If required.
function firstNonRepeatingChar(string){
	let objFrequency = {};
	for(let i=0;i<string.length;i++){
		let char = string[i];
		objFrequency[char] = (objFrequency[char] || 0) + 1;
	}

	for(let i=0;i<string.length;i++){
		if(objFrequency[string[i]] === 1){
			return string[i];
		}
	}
	return null;
}

let string = prompt("Enter a string");

let ans = firstNonRepeatingChar(string);
alert(ans);

