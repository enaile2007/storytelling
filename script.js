const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a sua principal motivação no trabalho?",
        alternativas: [
            {
                texto: "Realização pessoal.",
                afirmacao: "Afirmação: Você busca satisfação interna e crescimento constante na sua carreira, e isso é o que mais te impulsiona no dia a dia."
            },
            {
                texto: " Estabilidade financeira.",
                afirmacao: " A segurança financeira é um dos pilares para você, garantindo uma vida tranquila e sem preocupações quanto ao futuro."
            }
        ]
    },
    {
        enunciado: "Como você se vê em 5 anos?",
        alternativas: [
            {
                texto: "Em um cargo de liderança.",
                afirmacao: "Você tem ambições de alcançar uma posição estratégica e influente, onde suas decisões impactem diretamente a empresa."
            },
            {
                texto: "Com mais equilíbrio entre vida pessoal e profissional?",
                afirmacao: "Seu foco é encontrar harmonia entre suas responsabilidades no trabalho e a qualidade de vida fora dele, sem abrir mão de nenhum dos dois."
            }
        ]
    },
    {
        enunciado: "Como você prefere trabalhar?",
        alternativas: [
            {
                texto:"Em equipe.",
                afirmacao: "Você acredita que o trabalho colaborativo traz mais ideias e soluções criativas, além de um ambiente mais dinâmico e engajador."
            },
            {
                texto: "De forma autônoma.",
                afirmacao: "Sua produtividade aumenta quando tem autonomia para gerenciar seu tempo e suas tarefas, buscando sempre eficiência sem muitas interferências externas."
            }
        ]
    },
    {
        enunciado: "Você se sente valorizado no seu trabalho?",
        alternativas: [
            {
                texto: " Sim, sempre recebo feedback positivo.",
                afirmacao: "O reconhecimento das suas conquistas é importante para você, e isso faz com que se sinta motivado a continuar se esforçando cada vez mais."
            },
            {
                texto: "Não, sinto que meu esforço é ignorado.",
                afirmacao: " A falta de valorização pode ser um desafio para você, o que às vezes leva a um desânimo e até à busca por outras oportunidades de reconhecimento."
            }
        ]
    },
    {
        enunciado: "Como você lida com desafios profissionais?",
        alternativas: [
            {
                texto:  "Enfrento-os de frente e busco soluções criativas.",
                afirmacao: "Você vê os desafios como oportunidades para crescer e aprender, e está sempre disposto a sair da zona de conforto para encontrar novas soluções."
            },
            {
                texto: "Fico frustrado e, às vezes, desmotivado.",
                afirmacao: "Desafios podem afetar seu estado emocional e, em momentos de dificuldade, você precisa de mais apoio para se sentir capaz de superá-los."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
