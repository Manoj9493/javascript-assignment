const originalArray = [1,2,3,4,5,6,7,8,9,10,11,12];
let modifiedArray=[];
function callbackFun(item){
        //Here we can Implement any type of logic.
        //Here I Implemented the logic for EvenNumbers.
        if(item%2==0){
            return true;
        }
        return false;
}
const filterFunction = (oA,callbackFun)=>{
    let value;
    let newArray=[];
    for(let i=0;i<oA.length;i++){
        value=callbackFun(oA[i]);
        if(value){
            newArray.push(oA[i]);
        }
    }
    return newArray;
}
modifiedArray= filterFunction(originalArray,callbackFun);
console.log(modifiedArray);
