//Ex-2 XP

let frm = document.getElementById('frm');

frm.addEventListener('submit', function(e){
    e.preventDefault();
    let fname_value = document.getElementById('fname').value;
    let lname_value = document.getElementById('lname').value;
    console.log(fname_value.trim().length);
})



function a(){
    console.log('h1 1');
    alert('h1 2');
    return true;

}



console.log(frm);

let fname = document.getElementById('fname');
let lname = document.getElementById('lname');

console.log(frm.elements.fname.value);
console.log(frm.elements.lname);
