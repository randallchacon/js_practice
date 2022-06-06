//HELPERS *******************************
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
//MEDIAN CALCULATOR ************************
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

//GENERAL MEDIAN *****************************
const salaryCR = costarica.map(
    function(person){
        return person.salary;
});

const salaryCRSorted = salaryCR.sort(
    function(a, b){
        return a - b;
    }
);

const generalMediunCR = salaryMediun(salaryCRSorted);

//MEDIAN TOP 10% ****************************
const spliceStart = (salaryCRSorted.length*90)/100;
const spliceCount = salaryCRSorted.length - spliceStart;
const salaryCRTop10 = salaryCRSorted.splice(
    spliceStart,
    spliceCount
);
const MediunCRTop10 = salaryMediun(salaryCRTop10);

console.log(
  generalMediunCR,
  MediunCRTop10
);