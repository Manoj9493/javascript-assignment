const originalArray = [1,2,3,4,5,6,7];
let modifiedArray=[];
function callbackFun(item){
        return item*item;
}
const mapFunction = (oA,callbackFun)=>{
    let value;
    let newArray=[];
    for(let i=0;i<oA.length;i++){
        value=callbackFun(oA[i],i,oA);
        newArray.push(value);
    }
    return newArray;
}
modifiedArray= mapFunction(originalArray,callbackFun);
console.log(modifiedArray);
