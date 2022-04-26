// start coding your function here!
function find_max(arr){
    let result = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > result){
            result = arr[i];
        }
    }
    return result;
}
exports.find_max = find_max;
