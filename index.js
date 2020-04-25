function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase() 
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var shouting = shout(string) 
  var whispering = whisper(string)
  
  if (shouting === string) {
    return "I can't hear you!"
  } else if (whispering === string) {
    console.log("I can't hear you!")
  } else {
    console.log("I love yu, too.")
  }
}