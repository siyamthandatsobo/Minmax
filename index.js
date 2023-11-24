let max = document.querySelector('[data-max]')
let min = document.querySelector('[data-min]')

let maxnum = document.getElementById('max').value
let minnun = document.getElementById('min').value

let display = document.getElementById('result')



max.addEventListener('click',function(){
    let maxnum = document.getElementById('max').value
    let minnun = document.getElementById('min').value
    Max(maxnum,minnun)
})

function Max(a,b) {
    if(a>b){
       display.innerText = a
    } else {
        display.innerText = b
    }
}

min.addEventListener('click',function(){
    let maxnum = document.getElementById('max').value
    let minnun = document.getElementById('min').value
    Min(maxnum,minnun)  
})

function Min(a,b) {
    if(a<b){
        display.innerText = a
     } else {
         display.innerText = b
     }
}