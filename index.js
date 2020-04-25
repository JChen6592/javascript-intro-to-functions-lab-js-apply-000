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
  var greetingGrandma = "I love you, Grandma."
  
  if greetingGrandma.toLowerCase() === string {
    console.log("I can't hear you!")
  }
  else if greetingGrandma.toUpperCase() === string {
    console.log("YES INDEED!")
  }
  else if greetingGrandma === string {
    console.log("I love you, too.")
  }
}