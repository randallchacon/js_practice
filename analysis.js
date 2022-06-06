const salaryCR = costarica.map(
    function(person){
        return person.salary;
});

const salaryColSorted = salaryCR.sort(
    function(a, b){
        return a - b;
    }
);

function isPair(n){
    return (n%2 === 0);
};

function calculateMedian(list1){
    const sumList = list1.reduce( //reduce sum each list element
        function(accumulatedValue = 0, newElement){ //default value 0 for first time
            return accumulatedValue + newElement;
        }
    );     
    const averageList = sumList / list1.length;
    return averageList;
}

function salaryMediun(list){
    const halfList = parseInt(list.length/2);

    if(isPair(list.length)){
        const halfPerson1 = list[halfList -1 ];
        const halfPerson2 = list[halfList];
        const median = calculateMedian([halfPerson1, halfPerson2]);
        return median;
    } else {
        const halfPerson = list[halfList];
        return halfPerson;
    }
}

console.log(
  salaryMediun(salaryColSorted)
);