const perguntas = [
    {
      pergunta: "Qual era a cor do meu delineado no dia show da uclã ?",
      resposta: [
        "marrom claro",
        "preto",
        "marrom escuro",
      ],
      correta: 1
    },
    {
      pergunta: "qual era uma das musicas que estava escutando durante o nosso primeiro beijo ?",
      resposta: [
        "“Confident” — Justin Bieber ",
        "“No pressure” — Justin Bieber, Big Sean",
        "“no sense“ — justin bieber, travis scott",
      ],
      correta: 2
    },
    {
      pergunta: "Qual série assistimos na segunda vez que fui para sua casa ?",
      resposta: [
        "That 90’s show",
        "Skins",
        "Brooklyn 99",
      ],
      correta: 1
    },
    {
      pergunta: " Em qual música nos beijamos no show do Matuê ?",
      resposta: [
        "Anos luz",
        "brinca de mais",
        "Gorilla Roxo",
      ],
      correta: 0
    },
    {
      pergunta: "Qual era a cor do salto que usei no show do Vulgo FK ?",
      resposta: [
        " preto fosco",
        "preto vinil",
        " rosa",
      ],
      correta: 2
    },
    {
      pergunta: "quem foi o primeiro a dizer eu te amo ?",
      resposta: [
        "joao",
        "beatriz",
        "ambos",
      ],
      correta: 0
    },
    {
      pergunta: "quando foi feito o pedido oficial de namoro ?",
      resposta: [
        "07/01/2023",
        "14/10/2022",
        "28/12/2022",
      ],
      correta: 0
    },
    {
      pergunta: "qual foi o primeiro presente que vc me deu ?",
      resposta: [
        "cartinha",
        "camisa",
        "quadro",
      ],
      correta: 0
    },
    {
      pergunta: "aonde foi nosso primeiro encontro oficial ?",
      resposta: [
        "chuiquinho",
        "orquestra e depois outbeck",
        "pepe nero e depois sua casa",
      ],
      correta: 2
    },
    {
      pergunta: "qual foi a cor da minha camisa no nosso primeiro ano novo juntos ?",
      resposta: [
        "preta",
        "branca",
        "azul escuro",
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + 'de ' + totalDePerguntas
  
  //loop ou laco de repeticao 
  for(const item of perguntas){
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  
  for(let resposta of item.resposta){
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
     dt.querySelector('span').textContent = resposta
     dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
     dt.querySelector('input').value = item.resposta.indexOf(resposta)
     dt.querySelector('input').onchange = (event) => { 
       const estaCorreta = event.target.value == item.correta // true
       
       corretas.delete(item)
       if(estaCorreta){
         corretas.add(item)
       }
  
       mostrarTotal.textContent = corretas.size + 'de ' + totalDePerguntas
     }
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela 
  quiz.appendChild(quizItem)
  }
