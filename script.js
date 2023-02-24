// Homework 2/23/2023

// 1) Given an array, return a new array where the first and last elements from the original array are removed. I want this done in a function. If there's less than 3 elements, it shouldn't remove the items.

const arrOne = ["blue","green","red","black"]


function removeAndReturn(arrParameter) {
  let arrLength = arrParameter.length
  if (arrLength <= 2) {
    return arrParameter
  } else {
    arrParCopy = [...arrParameter]
    arrParCopy.shift()
    arrParCopy.pop()

    return arrParCopy
    }
}

console.log(removeAndReturn(arrOne))

/*
2) Build a heading generator.
IE:
heading = 6
content = "hey there, I'm a header"
=> '<h6>hey there, I'm a header</h6>'
Keep in mind, valid heading tags are only 1-6
*/


function headingGenerator() {
  let size = prompt("Enter a number between 1-6 (press enter to quit)\n")
  if (parseInt(size) <= 0 || parseInt(size) >= 7 || size == null || size == '') {
    var responseToStupidity = "I don't know how to put this in a loop to check for valid input. So have a var instead"
    return(responseToStupidity)
  } else {
    const content = prompt("Enter what you would like your header to say :) ")
    if (content == null || content == ''){
      var fightFireWithFire = "Why are you like this? Heres a var"
      return(fightFireWithFire)
    } else {
      const generatedHeader = `<h${size}>${content}</h${size}>`
  
      return generatedHeader
    }
  }
}

console.log(headingGenerator())

// /*
// 3) Swap the first and last characters of a string.
// IE: 
// "ryan" => "nyar"
// */

function characterSwap() {
  const inputPhrase = prompt('Type something that has more than 1 character')
  if (inputPhrase.length <= 1 || inputPhrase == null || inputPhrase == '') {
    var iDontKnowHowToMakeLoops = "I don't know how to put this in a loop to check for valid input. So have a var instead"
    return iDontKnowHowToMakeLoops
  } else {
    let inputLength = inputPhrase.length

    inputPhraseCopy = [...inputPhrase]
  
    firstChar = inputPhrase.charAt(0)
    lastChar = inputPhrase.charAt(inputLength - 1)
    
    inputPhraseCopy.shift()
    inputPhraseCopy.pop()

    inputPhraseCopy = inputPhraseCopy.join("")

    const swappedCharacters = `${lastChar}${inputPhraseCopy}${firstChar}`
    return swappedCharacters
  }
}

console.log(characterSwap())

