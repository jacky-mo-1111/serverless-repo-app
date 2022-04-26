// start coding your function here!
function running_late(date) {
    let result = date.substr(date.length-8);
    let result_int = parseInt(result);
    if(result_int >= 22){
        return "It is late!";
    }
    else{
        return "It is still early!";
    }
} 

exports.running_late = running_late;
