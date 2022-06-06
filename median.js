const list = [
    100,
    200,
    5000,
    300,
    500,
    100000000,
];

list.sort((a, b) => a - b);
function calculateMedian(list1){
    const sumList = list1.reduce( //reduce sum each list element
        function(accumulatedValue = 0, newElement){ //default value 0 for first time
            return accumulatedValue + newElement;
        }
    );     
    const averageList = sumList / list1.length;
    return averageList;
}

const halfList = parseInt(list.length / 2);

function isPair(n){    
    return (n%2 === 0);
}

let median;

if(isPair(list.length)){
    const element1 = list[halfList-1];
    const element2 = list[halfList];

    const averageElement1and2 = calculateMedian([
        element1, element2
    ]);

    median = averageElement1and2;
} else {
    median = list[halfList];
}