const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao olhar para o céu noturno, você descobre um novo planeta no Sistema Solar. Qual é o seu primeiro passo na investigação?",
        alternativas: [
            {
                texto: "Pesquisar suas características físicas e órbita usando dados teóricos e simulações.",
                afirmacao: "Sua jornada astronômica começou focada na análise teórica e no rigor científico."
            },
            {
                texto: "Observar diretamente com telescópios e registrar imagens em diferentes comprimentos de onda.",
                afirmacao: "Você preferiu uma abordagem prática, priorizando a observação direta do universo."
            }
        ]
    },
    {
        enunciado: "Durante um projeto da escola sobre a evolução das estrelas, qual tópico você decide aprofundar?",
        alternativas: [
            {
                texto: "O nascimento das estrelas em nebulosas e a formação de sistemas planetários.",
                afirmacao: "Fascinou-se pela origem dos corpos celestes e pela criação de novos mundos."
            },
            {
                texto: "A fase final das estrelas de alta massa, como supernovas e buracos negros.",
                afirmacao: "Decidiu investigar os fenômenos mais extremos e enigmáticos do cosmos."
            }
        ]
    },
    {
        enunciado: "Em um debate sobre a exploração espacial humana, qual posição você defende?",
        alternativas: [
            {
                texto: "Priorizar a construção de bases permanentes na Lua e em Marte para expansão humana.",
                afirmacao: "Defendeu a colonização espacial como um passo essencial para o futuro da humanidade."
            },
            {
                texto: "Focar no envio de sondas robóticas avançadas para explorar o Sistema Solar sem riscos humanos.",
                afirmacao: "Acreditou que a tecnologia robótica é o caminho mais eficiente e seguro para a exploração."
            }
        ]
    },
    {
        enunciado: "Para ilustrar uma apresentação sobre galáxias, qual recurso visual você escolhe produzir?",
        alternativas: [
            {
                texto: "Um modelo tridimensional detalhado da Via Láctea feito à mão ou em software CAD.",
                afirmacao: "Demonstrou habilidade técnica e precisão ao estruturar modelos astronômicos."
            },
            {
                texto: "Uma composição artística usando imagens de telescópios espaciais como o James Webb.",
                afirmacao: "Aproveitou os dados visuais mais modernos da ciência para inspirar outras pessoas."
            }
        ]
    },
    {
        enunciado: "Ao analisar a busca por vida extraterrestre, onde você acredita que temos a maior chance de encontrar evidências?",
        alternativas: [
            {
                texto: "Em oceanos subterrâneos de luas congeladas, como Europa (Júpiter) ou Enceladus (Saturno).",
                afirmacao: "Concluiu que a busca por água líquida dentro do nosso próprio Sistema Solar é a mais promissora."
            },
            {
                texto: "Na análise da atmosfera de exoplanetas em zonas habitáveis de outras estrelas.",
                afirmacao: "Apostou no estudo das atmosferas de mundos distantes para encontrar assinaturas biológicas."
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function telaInicial() {
    caixaPerguntas.textContent = "Bem-vindo ao Quiz de Astronomia! Teste seus conhecimentos e descubra seu perfil de explorador espacial.";
    caixaAlternativas.textContent = "";
    
    const botaoIniciar = document.createElement("button");
    botaoIniciar.textContent = "Iniciar Quiz";
    botaoIniciar.addEventListener("click", iniciarQuiz);
    caixaAlternativas.appendChild(botaoIniciar);
}

function iniciarQuiz() {
    atual = 0;
    historiaFinal = "";
    mostraPergunta();
}

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

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
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
    caixaPerguntas.textContent = "Seu Perfil de Explorador Espacial:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 

    const botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "Jogar Novamente";
    botaoReiniciar.addEventListener("click", telaInicial);
    caixaAlternativas.appendChild(botaoReiniciar);
}

telaInicial();