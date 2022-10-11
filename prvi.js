function poljesajednim(arr) {
    var polje = [];
    for (let el of arr){
        let len = Object.keys(el).length;
        if (len == 1){
            polje.push(el);
        }
    }
    return polje;
}

var arr = [{6: "a",},{4: "d",1: "c",},{ 2: "a",},];
console.log(poljesajednim(arr));