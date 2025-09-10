const name = "harsh saxena"
const repocount = 100

console.log(name + repocount);
console.log(`hello, i am ${name} and my repocount is ${repocount}`);

const game = "harsh-hs-sxna"

console.log(game[0]);
console.log(game.__proto_);

console.log(game.length);
console.log(game.toLocaleUpperCase());
console.log(game.toLowerCase());
console.log(game.charAt(5));
console.log(game.indexOf("h"));

const str2 = "Is this a question?";
console.log(str2.endsWith("question?"));

const sentence = "The quick brown fox jumps over the lazy dog.";

let index = 5;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"

index = -4;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of -4 returns the character d"

const icons = "☃★♲";
console.log(icons.codePointAt(1));

let str1= "jack"
let str3= "hello"
console.log(str1.concat(" ",str3));
console.log(str3.concat(" ",str1));

const area= "there are some trees in the garden"
const ab= "trees"
console.log(`the word ${ab} ${area.includes(ab)? "is" : "is not"} in the sentence`,);

const name1= "harsh bro  "
console.log(`i know ${name1.repeat(5)}`);

const para= "this student is very god in sports"
console.log(para.slice(33));
console.log(para.slice(5,22));

const str = "The quick brown fox jumps over the lazy dog.";

const word= str.split(" ");
console.log(word[8]);

const chars = str.split(" ");
console.log(chars[9]);























