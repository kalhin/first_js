//let arr = [1,5,-2,6,-8,9];
//let posArr = arr.filter(function(number){
//  alert(number >= 0);
//})
//
//for (let i = 100; i >= 2; i -= 2){
//    document.write('<p>'+ i + ' Hello World!</p>');
//}

//let i = 1;
//while (i <=100){
//    document.write('<h1>Hello World! ' + i + '<h1>')
//    i++;
//}

//let num = parseFloat(prompt('Ввведіть число'));
//while (isNaN(num)){
//    alert('Будь ласка введіть число');
//    num = parseFloat(prompt('Введіть число'))
//}
//alert('Дякуємо, ви ввели число: ' + num);

//const array = [1, 2, 3];
//array.forEach(i => alert(i));
    
//let animals = ["Cat", "Fish", "Lemur", "Comodo Dragon"];
//alert(animals);
//let i = 0;
//while (i < animals.length){
//    animals[i] = "Awesome " + animals[i];
//    i++;
//}
//alert(animals);

//const alphabet = "abcdefghigklmnopqrstuvwxyz";
//let randomStr = "";
//let i = 0;
//while (i <= 6) {
//    let randonNumb = Math.floor(Math.random() * alphabet.length);
//    randomStr = randomStr + alphabet[randonNumb];
//    i++;
//}
//alert(randomStr)

let userPhraseIs = prompt('Введіть текст');
let changePhrase = "";
for (let i = 0; i < userPhraseIs.length; i++) {
     if (userPhraseIs[i] === "a") {
         changePhrase = changePhrase + "4";
     } else if (userPhraseIs[i] === "e") {
         changePhrase = changePhrase + "3";
     } else if (userPhraseIs[i] === "i") {
         changePhrase = changePhrase + "1";
     } else if (userPhraseIs[i] === "o") {
         changePhrase = changePhrase + "0";
     } else {
         changePhrase = changePhrase + userPhraseIs[i];
     }
}
alert(changePhrase);