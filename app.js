'use strict'

const pessoas = [

    {
        nome: 'Renato A.',
        imagem: 'renatoA.webp',
        mensagem: 'To com dor...',
        contato: 'camisa 8',
        tempo: 'Agora mesmo',
        quantidade: '1'
    },

    {
        nome: 'Roger G.',
        imagem: 'RogerG.jpg',
        mensagem: 'Saudades...',
        contato: 'antigo 10',
        tempo: 'Há 20 minutos',
        quantidade: '2'
    },

    {
        nome: 'tite',
        imagem: 'tite.jpg',
        mensagem: 'Eu não vou vol...',
        contato: 'maior saudade',
        tempo: 'Há 3 horas',
        quantidade: '3'
    },

    {
        nome: 'Cássio',
        imagem: 'cassio.jpg',
        mensagem: 'AQUELA TRAVE...',
        contato: 'Gigante Cássio',
        tempo: 'Há 1 dia',
        quantidade: '12'
    },

    {
        nome: 'Yuri A',
        imagem: 'yuri.jpg',
        mensagem: 'a loira não tem...',
        contato: 'camisa 9',
        tempo: 'Há 2 dias',
        quantidade: '2'
    }

]

const criarCard = (pessoa) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img/${pessoa.imagem}`
    img.alt = pessoa.nome

    const info = document.createElement('div')
    info.classList.add('info')

    const nomeContainer = document.createElement('div')
    nomeContainer.classList.add('nome-container')

    const nome = document.createElement('h3')
    nome.classList.add('nome')
    nome.textContent = pessoa.nome

    const qntMsg = document.createElement('span')
    qntMsg.classList.add('qnt-msg')
    qntMsg.textContent = pessoa.quantidade

    const mensagem = document.createElement('p')
    mensagem.classList.add('mensagem')
    mensagem.textContent = pessoa.mensagem

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent = pessoa.tempo

    const contatoCard = document.createElement('div')
    contatoCard.classList.add('contato')

    const contato = document.createElement('p')
    contato.textContent = pessoa.contato

    card.appendChild(img)
    card.appendChild(info)
    card.appendChild(tempo)
    card.appendChild(contatoCard)
    info.appendChild(nomeContainer)
    info.appendChild(mensagem)
    nomeContainer.appendChild(nome)
    nomeContainer.appendChild(qntMsg)
    contatoCard.appendChild(contato)

    return card

}

const mostrarCards = (pessoa) => {

    const containerChat = document.getElementById('container-chat')
    const card = criarCard(pessoa)
    containerChat.appendChild(card)

} 

pessoas.forEach(mostrarCards)