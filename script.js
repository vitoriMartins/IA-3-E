const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Você prefere doce ou salgado?",
        alternativas: [{
            texto: "Doce",
            afirmação: "Seu gosto é adocicado."
        },
        {
            texto: "Salgado",
            afirmação: "Seu gosto é salgado."
        }
        ]
    },
    {
        enunciado: "Você gosta de fazer esportes?",
        alternativas: [{
            texto: "Sim",
            afirmação: "Você é uma pessoa atletica e ativa."
        },
        {
            texto:"Não",
            afirmação:"Talvez sua vida é mais calma e tranquila."
        }
        ]
    },
    {
        enunciado: "Você prefere filmes de ação? ou romanticos?",
        alternativas: [{
            texto: "Ação",
            afirmação: "Sua personalidade é fimes da Marvel e DC."
        },
        {
            texto: "Romance",
            afirmação: "Sua personalidade é calma, e talvez você goste mais de ler do que algum filme."
        }
        ]
    }
]
let posicao = 0;
let perguntaAtual;
let respostas = "";

function mostraPergunta() {
    if(posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  ()=> respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Daqui a 10 anos... ";
    textoResultado.textContent = respostas;
    caixaAlternativa.textContent = "";
}
mostraPergunta();