const lines = [
"Hey, my babyyy...",
"",
"Happy Birthday ❤️",
"",
"Today isn't just another day.",
"",
"Today, the world celebrates twenty years of you.",
"",
"I couldn't wrap the whole world and hand it to you...",
"",
"So I built you one instead."
];

const element = document.getElementById("typewriter");
const button = document.getElementById("giftButton");

let line = 0;

function showNextLine(){

if(line >= lines.length){
button.style.display="inline-block";
return;
}

element.innerHTML += lines[line] + "<br>";

line++;

setTimeout(showNextLine,1200);

}

showNextLine();
