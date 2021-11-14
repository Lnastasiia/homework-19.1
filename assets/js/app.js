
let mass = +prompt("Масса (кг.)");
let height = +prompt("Рост (м.)");

let index = mass / (height ** 2);
console.log(`Ваш индекс ${index}`);

if(index <= 16){
    console.log("Выраженный дефицит массы тела");
}else if( (index >= 16) && (index <= 18.5) ){
    console.log("Недостаточная (дефицит) масса тела");
}else if( (index >= 18.5) && (index <= 25) ){
    console.log("Норма");
}else if( (index >= 25) && (index <= 30) ){
    console.log("Избыточная масса тела (предожирение)");
}else if( (index >= 30) && (index <= 35) ){
    console.log("Ожирение 1 степени");
}else if( (index >= 35) && (index <= 40) ){
    console.log("Ожирение 2 степени");
}else if(index >= 40){
    console.log("Ожирение 3 степени");
} 




