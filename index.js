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
  var greeting = "I love you, Grandma."
  
  if greeting.toLowerCase() === string {
    console.log("I can't hear you!")
  }
  if greeting.toUpperCase() === string {
    console.log("YES INDEED!")
  }
  if greeting === string {
    console.log("I love you, too.")
  }
}