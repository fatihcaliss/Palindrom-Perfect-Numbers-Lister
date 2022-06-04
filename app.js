let low = document.getElementById('low');
let high = document.getElementById('high');
let palinBtn = document.getElementById('palinBtn');
let perfectBtn = document.getElementById('perfectBtn');

palinBtn.addEventListener('click', () =>{
    if(low.value >= high.value){
        alert("High number should be bigger than low number.")
    }
    else{    
        for (let i = low.value; i <= high.value; i++){
        if(palindrom(i)){
            document.querySelector('.palindromeList').innerHTML += i + `<br>`
        }
    }
    if(low.value >= high.value){
        alert("High number should be bigger than low number.")
    }}

})

perfectBtn.addEventListener('click', () =>{
    if(low.value >= high.value){
        alert("High number should be bigger than low number.")
    }
    else {    
        for (let i = low.value; i <= high.value; i++){
        if(perfectNumber(i)){
            document.querySelector('.perfectNumberList').innerHTML += i + `<br>`
        }
    }}


})

function palindrom(num) {
    let reverseNum = num.toString().split('').reverse().join('');
    return num == reverseNum
}  

function perfectNumber(num){
    let count = 0;
    for(let i = 1; i < num; i++){
        if(num % i == 0) {
            count += i;
        }
    }
    return count == num;
}




