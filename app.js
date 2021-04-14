





const sec = document.getElementById('sec')
const mils = document.getElementById('mils')
const min = document.getElementById('min')
let a = 0
let b = 0
let c = 0


const start = document.getElementById('start')
const stops = document.getElementById('stop')
const progress = document.getElementById('progress')
const prog = document.getElementById('prog')


const render = (val) => {
    let html = `
        <li>${val}</li>
    `
    return html;
}



start.addEventListener('click', () => {
    var x = setInterval((hours, minutes, seconds, milSeconds)=>{
        // const now = new Date();
        // hours = now.getFullYear()
        // minutes = now.getMinutes()
        // seconds = now.getSeconds()
    
        // milSeconds = now.getMilliseconds()
        // time.innerHTML = `${hours}:${minutes}:${seconds}`
    
        a++
        if(a == 1000/4){
            a = 0
        }
        mils.innerHTML = a
    
        
    
    }, 1)
    
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

prog.addEventListener('click', () => {
    let val = sec.parentElement.textContent;
    progress.innerHTML += render(val)
})