const originalArray = [1,2,3,4,5];
const callBackFun = (accumulator,currentValue)=>{
        //We can Write any logic here like sum ,average etc.
        //I write the logic of sum to demonstrate the reduce function.
        return accumulator+currentValue;
}
const reduceFunction = (originalArray,callBackFun,initialValue)=>{
    let accumulator = initialValue === undefined ? originalArray[0] : initialValue;
    const startIndex = initialValue === undefined ? 1 : 0;
    for(let i=startIndex;i<originalArray.length;i++){
        accumulator = callBackFun(accumulator,originalArray[i],i,originalArray);
    }
    return accumulator;

}
console.log("Sum of the numbers in the array if initial value for the accumulator is Provided: "+reduceFunction(originalArray,callBackFun,0));
console.log("Sum of the numbers in the array if initial value for the accumulator is Not Provided: "+reduceFunction(originalArray,callBackFun));