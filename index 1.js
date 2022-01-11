
let hacker1 = "manny"
console.log ("the driver name is" + hacker1) 
let hacker2 = "maia"
console.log("the navigaotr name is " + hacker2)

if (hacker1.length < hacker2.length ){
console.log ( "maia name is longer than manny")
} else if ( hacker1.length > hacker2.length){
  console.log ("manny name is longer than maia")
} else  {
  console.log ( "wow, you both have equally long names,")
}
let hacker1upper = ""
  for (let i = 0; i < hacker1.length ; i++){ 
    hacker1upper += hacker1[i].toUpperCase()+ " "
  }
  console.log (hacker1upper)

let hacker2uno = ""
for ( let i = hacker2.length - 1;i >= 0; i--){
  hacker2uno += hacker2[i]
  
}
console.log (hacker2uno)
let alphabet = "abcdefghijklomnpqrtsuvwxyz".split("")
for (let i = 0; i < hacker1.length; i++ ){
 let index1 = alphabet.indexOf(hacker1[i])
 let index2 = alphabet.indexOf(hacker2[i])
 
if (index1 === index2) { continue  
}
else if (index1 < index2){
console.log (hacker1+  " goes first")
break
}
else if (index2 < index1){
  console.log (hacker2+  " goes first")
break
}
else {console.log (" what! you both have the same name?")
}
}



