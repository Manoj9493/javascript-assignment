const array = ["Manoj","Chithra","Nitish","Venkat","Akanksha"];
const callBackFun = (person,position) =>{
        console.log(`Hi This is ${person} at Position ${position+1} `);
}

const  forEachFunction=(arr, callBackFun)=>{
    for (let i = 0; i < arr.length; i++) {
        callBackFun(arr[i], i, arr);
    }
}
forEachFunction(array,callBackFun);



