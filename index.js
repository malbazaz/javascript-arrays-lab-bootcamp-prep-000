const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten (name){
  kittens.push(name)
}
function destructivelyPrependKitten (name){
  kittens.unshift(name)
}
function destrucivelyRemoveLastKitten(){
  kittens.slice(-1)
}
function destructivelyRemoveFirstKitten(){
  kittens.slice(0)
}
function appendKitten(name){
  var kittens1 = [...kittens,name]
  return kittens1
}
function prependKitten(name){
  var kittens1 = [name,...kittens]
  return kittens1
}
function removeLastKitten(){
  var kittens1 = kittens.slice(-(kittens.length-1))
  return kittens1
}
