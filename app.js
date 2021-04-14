





const sec = document.getElementById('sec')
const mils = document.getElementById('mils')
const min = document.getElementById('min')
let a = 0
let b = 0
let c = 0


const start = document.getElementById('start')
const stops = document.getElementById('stop')
const progress = document.getElementById('progress')
const lap = document.getElementById('lap')


const render = (val) => {
    let html = `
        <li>${val}</li>
    `
    return html;
}



start.addEventListener('click', () => {
    var x = setInterval(()=>{
        a++
        if(a == 100){
            a = 0
        }
        mils.innerHTML = a
    
    }, 10)
    
    var y = setInterval(() => {
        b++
        sec.innerHTML = b
    }, 1000)
    var z = setInterval(()=>{

        min.innerHTML = c
    },1000*60)
    stops.addEventListener('click', () => {
        clearInterval(x)
        clearInterval(y)
        start.style.display = 'inline'
        stops.style.display = 'none'

    })
    start.style.display = 'none'
    stops.style.display = 'inline'

    
})

lap.addEventListener('click', () => {
    let val = sec.parentElement.textContent;
    progress.innerHTML += render(val)
})