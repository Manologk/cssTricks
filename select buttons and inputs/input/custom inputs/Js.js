const left = document.getElementById("leftInput");
var right = document.getElementById("rightInput");

function double(x){
    return x * 2;
}

left.addEventListener("input", () =>{
    console.log(double(left.value));
    // document.getElementById("rightInput").value = double(left.value);
    right.value = double(left.value);
})

function ani(){
    document.getElementById("img").classList.add('classname');
}