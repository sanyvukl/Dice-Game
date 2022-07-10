let kube1 = [0,1,2,3,4,5];
let kube2 = [0,1,2,3,4,5];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var rand1 = getRandomInt(6);
var rand2 = getRandomInt(6);

let num1 = kube1[rand1]+1;
let num2 = kube2[rand2]+1;

console.log(num1);
console.log(num2);

document.querySelector('.kub1 .cub'+num1).setAttribute('class',"cub cub"+num1+"active");
document.querySelector('.kub2 .cub'+num2).setAttribute('class',"cub cub"+num2+"active");

if(num1 > num2){
    document.querySelector('h1').innerText = "Player 1 Wins!";
}else if(num1 === num2){
    document.querySelector('h1').innerText = "Draw!";
}
else{
    document.querySelector('h1').innerText = "Player 2 Wins!";
}