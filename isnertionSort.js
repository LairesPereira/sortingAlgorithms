let randomInput = Array.from({ length: 200 }, () => Math.floor(Math.random() * 200)) 
let position = 0;
let key = randomInput[0]

function insertionSort(randomArray) {
    console.log('Random:', randomArray)
    console.time('Execution Time')
    
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

    console.timeEnd('Execution Time');
    console.log('Sorted: ', randomArray)
}


insertionSort(randomInput)

// [ 3 5 8 1 4 2 ]
