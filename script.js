let cells = document.querySelectorAll('#field td')
let sc = document.querySelector('.score__text')
let btn = document.querySelector('.btn')
let winsc = document.querySelector('.winner__wrapper')
let wtext = document.querySelector('.winner__text')
console.log(cells)
let q = 0
let n = 0
function start(cells) {
    for (let cell of cells) {
        cell.addEventListener('click', function ff() {
            
            if (n % 2 != 0) {
                this.textContent = 'X'
            } else {
                this.textContent = 'O'
            }
            this.removeEventListener('click', ff)
            if (isWinner(cells) == true) {
                if(q % 2 == 0){
                    let nd =  document.createElement('div')
                    nd.textContent = `Победитель - ${this.textContent}`
                    sc.append(nd)
                }else{
                    winsc.style.display = 'flex'
                    wtext.textContent = `Победитель - ${this.textContent}`
                }

            }
            if (n == 8 && isWinner(cells) == false){
                if(q % 2 == 0){
                    let nd =  document.createElement('div')
                    nd.textContent = 'Ничья'
                    sc.append(nd)
                }else{
                   winsc.style.display = 'flex'
                wtext.textContent = `Ничья` 
                }
                
            }
            n++
        })
    }
}
btn.addEventListener('click', function(){
    q++
    let nd =  document.createElement('div')
    nd.textContent = 'Выбран другой режим'
    sc.append(nd)
})
start(cells)

function isWinner(cells) {
    let combs = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6]  
    ]

    for (let comb of combs) {
        if (cells[comb[0]].textContent == cells[comb[1]].textContent && cells[comb[1]].textContent ==
            cells[comb[2]].textContent && cells[comb[0]].textContent != '') {
            return true;
        }
    }
    return false;
}