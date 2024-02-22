let randomArray = Array.from({ length: 200}, () => Math.floor(Math.random() * 200)) 
let count = new Array(200).fill(0) // use counter for storing how many times each number repeats itself
let sortedList = []

function countingSort(inputList, count) {
    inputList.forEach(element => {
        count[element] += 1; // every time an element is repeated we add one at respective position 
    });
    
    let aux = 0;
    for (let i = 0; i < count.length; i++) {
        if(count[i] != 0) {
            while(aux < count[i]){ // if an element appears more than one time we keep pushing it bedore going to next position
                sortedList.push(i) 
                aux++
            }
            aux = 0;
        }
        
    }
}

countingSort(randomArray, count)
console.log("Input: ", count)
console.log("Counter:" ,count)
console.log("Sorted", sortedList)
