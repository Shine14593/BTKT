function tryRemoveFromArray(arr, index){
    if(index >= 0 && index < arr.length){
        let result = [];
        for( let i = 0; i < arr.length; i++){
            if( i !==index) result.push(arr[i]);

        }
        return result;
    } else{
        return arr;
    }
}
let originalArray = [ 10,20,30,40,50];
let indexToRemove =2;
let newArray = tryRemoveFromArray(originalArray, indexToRemove);

document.write("Mang ban dau:" , originalArray );
document.write("<br>");
document.write("Mang sau khi loai bo:" ,newArray);