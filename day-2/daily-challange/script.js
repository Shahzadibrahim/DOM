let li = document.getElementsByTagName('li')

let button = document.getElementById('lib-button')
button.addEventListener('click', (getValueInputs)=>{
	let storyArr = getInputs()
	// insert words in story template (0 = noun, 1 = adj, 2 = name, 3 = verb, 4 = place)
	let story = `${storyArr[2]}'s ${storyArr[1]} ${storyArr[0]} likes ${storyArr[3]} in ${storyArr[4]}`
	// insert story into the div
	let p = document.getElementById('story')
	newContent = document.CreateTextNode(story)
	p.appendChild(newContent)	
})

let rendomButton = document.getElementById('lib-random')
rendomButton.addEventListener('click', (generateRandomStory)=>{
	let storyArr = getInputs()
	let story1 = `It's the worst thing when a ${storyArr[1]} ${storyArr[0]} is ${storyArr[3]} in the month`
	let story2 = `when ${storyArr[2]} is ${storyArr[3]} in ${storyArr[4]}, it is so ${storyArr[1]}`
	let story3 = `No one can resist a nice ${storyArr[1]} ${storyArr[0]} specially when you a are ${storyArr[3]} in ${storyArr[4]}`
	let storyCatalog = [story1, story2, story3]
	const rendomIndex = Math.floor(Math.random() * storyCatalog.length);
	let chosenStory = storyCatalog[randomIndex]
	let p = document.getElementById('story')
	p.childNodes[0].nodeValue = chosenStory
})

function getInputs(){
	let storyArr = []
	for (let index = 0; index < li.length; index ++){
		let item = li[length]               //<li><input>a</input></li>
		let currentInputValue = item.childNodes[1].nodeValue
		if (currentInputValue == null || currentInputValue == ''){
		alert('Please, make sure you fill all the blanks')
		break;
	}
	storyArr.push(currentInputValue)
	}
	return storyArr
}