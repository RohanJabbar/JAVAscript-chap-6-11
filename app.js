// var CityNames = prompt("Enter Your City Name") .toUpperCase();
// var CityNames = ["karachi" , "islamabad" , "lahore"]

// if(CityNames == "karachi"){
//     alert("City of lights")
// }else if(CityNames == "islamabad"){

// alert("Cleanest City")
// }else if(CityNames == "lahore"){
//     alert("Badshahi masjid")
// }else{
//     alert("City Not Found")
// }



// // UPPER CASE LOWER CASE
// var a =    prompt("Enter your name")
// var b= a.slice(0,1).toUpperCase()
// var c= a.slice(1).toLowerCase()
// console.log(b + c);



// REPLACE THE WORD USING SLICE

var text= "A paragraph is a collection of words strung together to make a longer unit than a sentence. Several sentences often make a paragraph. There are normally three to eight sentences in a paragraph. Paragraphs can start with a five-space indentation or by skipping a line and then starting over. This makes it simpler to tell when one paragraph ends and the next starts simply it has 3-9 lines."

console.log(text)

var repchar= "paragraph"

for(i=0; i<=text.length;i++){
    if(text.slice(i,i+8)==="sentence"){
        text = text.slice(0,i) + repchar + text.slice(i+8)
    }
}
console.log(text)