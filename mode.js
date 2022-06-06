const list = [   1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1, ];

const listCount = {};

list.map(
    function(element){
        if(listCount[element]){
            listCount[element]++; //sum quantity of each item appears
        } else {
            listCount[element] = 1;//first execution
        }        
    });

const listArray = Object.entries(listCount).sort(
    function(AElement, BElement){
        return AElement[1] - BElement[1];
    }
) //convert element to array

const mode = listArray[listArray.length -1];