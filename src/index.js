
exports.min = function min (array) {
    if(typeof array ==='undefined' || (Array.isArray(array) &&array.length===0)) {
        return 0
    }
  return Math.min(...array);
}

exports.max = function max (array) {
    if(typeof array ==='undefined' || (Array.isArray(array) &&array.length===0)) {
        return 0
    }
    return Math.max(...array);
}

exports.avg = function avg (array) {
    if(typeof array ==='undefined' || (Array.isArray(array) &&array.length===0)) {
        return 0
    }
    return array.reduce((total,el)=>total+el,0)/array.length;
}
