/*
Instruções para entrega

# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
 
 
 
Bons estudos 😉
*/

let heroi = "Naofumi"
let experiencia = 1000
let nivel;

if (experiencia <= 1000 && experiencia >= 0) {
    nivel = "Ferro"
} else if (experiencia <= 2000 && experiencia >= 1001) { 
    nivel = "Bronze"
} else if (experiencia <= 5000 && experiencia >= 1001) {
    nivel = "Prata"
} else if (experiencia <= 7000 && experiencia >= 5001) {
    nivel = "Ouro"
} else if (experiencia <= 8000 && experiencia >= 7001) {
    nivel = "Platina"
} else if (experiencia <= 9000 && experiencia >= 8001) {
    nivel = "Ascendente"
} else if (experiencia <= 10000 && experiencia >= 9001) {
    nivel = "Imortal"
} else if (experiencia >= 10001) {
    nivel = "Radiante"
}


console.log("O Herói de nome " + heroi + " está no nível de " + nivel + "!")

