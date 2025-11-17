let a = "My Name Is Kabeer Hussain"
let b = "I am a Student"
let c = "               JavaScript is Running        "
let d = "ali"
let e = "zain"
let f = "Kabeer is learning JavaScript and Kabeer loves coding";
let g = "I love JavaScript and JavaScript loves me"; 


// String Method 
//method  ko use krne ke liye ye "()" lagana zarori hai kyu ke method bhi aik function hai jo parenthesis "()" lagana zaroori hota hai

console.log(a.toUpperCase()) //output : MY NAME IS KABEER HUSSAIN
console.log(a.toLowerCase()) //output : my name is kabeer hussain
console.log(a.charAt('11')) // output : K , Reason : kis num pe knsa character hai ye batata hai
console.log(b.at(5)) // output : a, 
console.log(a.at(-1));     // r
console.log(a.charAt(-1)); // "" (empty string)
console.log(a.charAt("11")) // "11" ko number 11 treat karega
console.log(a.at("11"))     // "11" ko number me convert karta hai (Allowed)
// charAt() → purana method, negative index support nahi, emojis bhi galat de sakta hai.
// at() → modern method, negative index support + emojis ko sahi handle karta hai.
console.log(b.indexOf("Student")) //output : 7 , Reason : knsa character kis num pe hai ye batata hai
console.log(b.includes("am")) //output : true (check krta hai word/letter hai variable me)
console.log(b.endsWith("student")) //output : true (check krta hai var ici word pe end howa hai ya nhi)
console.log(b.anchor()) //output : <a name="undefined">I am a Student</a> , Reason : ye text ko <a> tag me wrap krdeta hai
console.log(b.big()) //output : <big>I am a Student</big> , Reason : ye text ko <big> tag me wrap krdeta hai
console.log(b.blink()) //output : <blink>I am a Student</blink> , Reason : ye text ko <blink> tag me wrap krdeta hai
console.log(b.bold()) //output : <b>I am a Student</b> , Reason : ye text ko <b> tag me wrap krdeta hai <b> text ko bold krdeta hai,
console.log(b.italics()) //output : <i>I am a Student</i> , Reason : ye text ko <i> tag me wrap krdeta hai <i> text ko italic krdeta hai,
console.log(f.link());// output : <a href="undefined">Kabeer is learning JavaScript and Kabeer loves coding</a>, text ko hyperlink me wrap krdeta hai
console.log(a.concat(b)) //output : My Name Is Kabeer HussainI am a Student, (concat krta hai a, b ko mila dia jese)
console.log(a.charCodeAt(4)) // output : 97, (value ka ASCII number deta hai a ka 97 hai but special character ke bhi number nhi deta hai)
console.log(a.codePointAt(4)) // output : 97, same hai but special character ke bhi number deta hai
console.log(d.localeCompare(e)) // output : -1,  check krta hai knsa alphabate pehle hai (ali or zain me a pehle me ata hai ic liye -1 aya) 
console.log("hello".localeCompare("hello")) // output : 0, check krta hai knsa alphabate pehle hai (hello me h barabar hai ic liye 0 aya) 
console.log(e.localeCompare(d)) // output : 1, check krta hai knsa alphabate pehle hai (zain or ali me z bad me ata hai ic liye 1 aya)
console.log(f.lastIndexOf("Kabeer"));// output : 34, dekhta hai agr do bar ya zayada bar word use howa tu last wala kis num pe hai
console.log(g.match(/JavaScript/g)); // 'g' flag = global match , output : ["JavaScript", "JavaScript"]
let matches = g.matchAll(/JavaScript/g);
console.log(Array.from(matches)); // output : (2) [Array(1), Array(1)]
// ['JavaScript', index: 7, input: 'I love JavaScript and JavaScript loves me', groups: undefined]
// ['JavaScript', index: 22, input: 'I love JavaScript and JavaScript loves me', groups: undefined]


