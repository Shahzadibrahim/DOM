//Ex-1 XP

// Part 1
let h1 = document.getElementsByTagName('h1')
console.log(h1[0])


// Part 2
let paras = document.getElementsByTagName('p')
let para_len = paras.length
paras[para_len - 1].remove();


// Part 3
let h2 = document.querySelector('h2')
console.log(h2);
h2.addEventListener("click", function(event){
    h2.style.backgroundColor = 'Red';
});

// Part 4
let h3 = document.querySelector('h3')
console.log(h3);
h3.addEventListener("click", function(event){
    h3.style.display = 'None';
})

// Part 5
function bold_para(){
    console.log("Turn all paragraph bold");
    let paras = document.getElementsByTagName('p');
    console.log(paras);

    for (let p of paras){
        p.style.fontWeight = 'bold';
    }
}