/*
const listN = [
    100,
    200,
    300,
    500,
];
*/

function calculateAverage(list1){
    // let sumList = 0;
    // for(let i = 0; i< list1.length; i++){
    //     sumList = sumList + list1[i];
    // }   
    const sumList = list1.reduce( //reduce sum each list element
        function(accumulatedValue = 0, newElement){ //default value 0 for first time
            return accumulatedValue + newElement;
        }
    ); 
    
    const averageList = sumList / list1.length;
    return averageList;
}