let res = document.querySelector('section#result')
let computador = 0
let jogador = 0



function sortear() {
    let min = 1
    let max = 100
    let dif = max - min

    let aleatorio = Math.random()
    computador = min + Math.trunc(dif * aleatorio) 

    }

    function jogar() {
        jogador = Number(window.prompt ('Qual seu palpite?'))
        if ( jogador < computador) {
               res.innerHTML += `<p>Você falou ${jogador}. Meu número <strong>MAIOR</strong>!</p>`
        } else if (jogador > computador) {
            res.innerHTML += `<p> Você falou ${jogador}.Meu número <strong>MENOR</strong>!</p>`
        } else  if (jogador == computador){
            res.innerHTML += `<p><strong> PARABÉNS! </strong> Você acertou! Eu tinha sorteado o valor ${computador}!</p>`
            document.getElementById ('botao').style.visibility = 'hidden'
        }
        }
        function limpar() {
            let res = document.querySelector ('section#result')
            res.innerHTML = null 
            }
        