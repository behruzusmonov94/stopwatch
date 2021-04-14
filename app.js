const sec = document.getElementById('sec')
const mils = document.getElementById('mils')
const min = document.getElementById('min')

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

let a = 0
let b = 0
let c = 0
start.addEventListener('click', () => {

    var x = setInterval(() => {
        a++
        if (a == 100) {
            a = 0
        }
        mils.innerHTML = a

    }, 10)

    var y = setInterval(() => {
        b++
        sec.innerHTML = b
    }, 1000)
    var z = setInterval(() => {

        min.innerHTML = c
    }, 1000 * 60)
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


//dark mode

const darkMode = document.getElementById('darkMode')
const html = document.querySelector('html')

darkMode.addEventListener('click', (e) => {
    html.classList.toggle('dark-mode')
    if (e.target.classList.contains('fa-moon')) {
        e.target.classList.remove('fa-moon')
        e.target.classList.add('fa-sun')
    } else {
        e.target.classList.remove('fa-sun')
        e.target.classList.add('fa-moon')
    }

})

//reset
const reset = document.getElementById('reset')

reset.addEventListener('click', () => {
    mils.textContent = '0'
    sec.textContent = '0'
    // min.innerHTML = '0'
    a = 0
    b = 0
    c = 0
    let item = document.querySelectorAll('#progress li')
    item.forEach(item => {
        item.remove()
    })
})