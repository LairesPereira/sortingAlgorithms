let randomInput = [ 8, 3, 5, 1, 4, 2, 9]
let position = 0;
let key = randomInput[0]

let aux 
for (let i = 0; i < randomInput.length; i++) {
    let element = i
    while(element > 0 && randomInput[element - 1] > randomInput[element]){
        aux = randomInput[element - 1]
        randomInput[element - 1] = randomInput[element]
        randomInput[element] = aux
        element = element - 1
    }
}

console.log(randomInput)

// [ 3 5 8 1 4 2 ]
