//Goal resposta certa
//1. Buscar o campo com a resposta correta
//2. Elemento repsosta certa a dispertar com clique
//2.2 buscar o p onde eu quero injetar conteúdo

const respostaCerta = document.getElementById('resposta-certa')
const explicacao = document.getElementById('explicacao');

respostaCerta.addEventListener('click', (event) => {
	explicacao.innerHTML = "<strong>Correto!!</strong> :)"
})


//Goal resposta errada

//1. buscar todas as respostas erradas

const respostasErradas = document.querySelectorAll('.resposta-errada');

respostasErradas.forEach((resposta)=> {

	resposta.addEventListener('click', (event) => {
		let explicacaoConteudo ="<strong>Ops, errado ... :/</strong>"

		if(resposta.id ==="resposta-html") {
			explicacaoConteudo += " HTML permite-nos dar estrutura e conteúdo a nossa página."
		} else if (resposta.id === "resposta-css") {
			explicacaoConteudo += " CSS permite-nos dar estilo a nossa página."
		}else {
			explicacaoConteudo += " Ruby é uma das várias linguagens que pode ser itilizada para backend. " 

			}

		explicacaoConteudo += " Tenta outra vez."

		explicacao.innerHTML=explicacaoConteudo;

	})
})

