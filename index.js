function century(year){
    if(year > 1 && year <= 100){
        sec = 1
    } else if (year > 100 && year % 100 == 0){
        sec = year / 100
    } else {
        sec = Math.trunc((year / 100) + 1)
    }
    return sec
}
console.log(century(1400));