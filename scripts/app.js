const words = ["femur", "cranio", "tibia", "vertebra", "escapula", "clavicula", "costelas", "umero", "radio", "ulna", "fibula", "mandibula", "sacro", "coccix", "patela", "esfenoide", "hioide", "occipital", "etmoide", "talus", "zigomatico", "atlas", "halux", "axis", "escafoide", "calcaneo", "esterno", "pelve", "maxilar", "vomer"];
let selectedWord = "";
let guessedLetters = [];
let attemptsLeft = 6;

const wordDisplay = document.getElementById("word-display");
const alphabetContainer = document.getElementById("alphabet-container");
const attemptsDisplay = document.getElementById("attempts-display");
const messageDisplay = document.getElementById("message-display");
const restartButton = document.getElementById("restart-button");

// Função para iniciar o jogo
function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    attemptsLeft = 6;
    messageDisplay.textContent = "";
    alphabetContainer.innerHTML = "";
    createAlphabet();
    updateDisplay();
}

// Função para criar o alfabeto na tela
function createAlphabet() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    alphabet.split("").forEach(letter => {
        const letterElement = document.createElement("span");
        letterElement.textContent = letter;
        letterElement.classList.add("alphabet-letter");
        letterElement.addEventListener("click", () => handleGuess(letter, letterElement));
        alphabetContainer.appendChild(letterElement);
    });
}

// Atualiza a exibição da palavra
function updateWordDisplay(letter) {
    const wordArray = selectedWord.split("");
    const displayArray = wordDisplay.textContent.split(" ");
    wordArray.forEach((char, index) => {
        if (char === letter) {
            displayArray[index] = char;
        }
    });
    wordDisplay.textContent = displayArray.join(" ");
}

// Verifica se a palavra foi completamente adivinhada
function isWordComplete() {
    return !wordDisplay.textContent.includes("_");
}

// Atualiza a exibição de tentativas e palavra
function updateDisplay() {
    const displayWord = selectedWord.split("").map(letter => (guessedLetters.includes(letter) ? letter : "_")).join(" ");
    wordDisplay.textContent = displayWord;
    attemptsDisplay.textContent = `Tentativas restantes: ${attemptsLeft}`;
}

// Desabilita o alfabeto após o jogo terminar
function disableAlphabet() {
    const letters = document.querySelectorAll(".alphabet-letter");
    letters.forEach(letter => letter.style.pointerEvents = "none");
}

// Reinicia o jogo
restartButton.addEventListener("click", startGame);

// Inicializa o jogo ao carregar a página
window.addEventListener("load", startGame);

const hints = {
    femur: ["Dica 1 (Estrutural): Maior osso do corpo humano.", "Dica 2 (Função): Na parte proximal articula-se com o osso do quadril, e na parte distal com a patela e a tíbia.", "Dica 3 (Curiosidade): Trata-se do osso de maior comprimento e peso no esqueleto humano."],
    cranio: ["Dica 1 (Estrutural): Conjunto ósseo que protege o cérebro e forma a cabeça.", "Dica 2 (Função): Composto por 22 ossos.", "Dica 3 (Curiosidade): Os ossos do crânio são divididos em dois grupos: o neurocrânio, formado por 8 ossos, e o viscerocrânio, formado por 14 ossos. "],
    tibia: ["Dica 1 (Estrutural): Osso da perna, abaixo do joelho.", "Dica 2 (Função): Suporta o peso da parte superior do corpo.", "Dica 3 (Curiosidade): Na parte proximal articula-se com o fêmur e a fíbula, e na parte distal com o tálus e a fíbula."],
    vertebra: ["Dica 1 (Estrutural): Constitui a coluna vertebral.", "Dica 2 (Função): Protege a medula espinhal.", "Dica 3 (Curiosidade): A coluna possui 33 vértebras no total, sendo 24 vértebras móveis e 9 vértebras fixas (osso sacrococcígeo)."],
    escapula: ["Dica 1 (Estrutural): Osso chato localizado nas costas.", "Dica 2 (Função): Articula-se com o úmero e a clavícula.", "Dica 3 (Curiosidade): Forma a parte dorsal da cintura escapular."],
    clavicula: ["Dica 1 (Estrutural): Osso longo e curvo, localizado horizontalmente acima da primeira costela.", "Dica 2 (Função): Constitui a parte ventral da cintura escapular.", "Dica 3 (Curiosidade): Único osso da cintura escapular que, através do esterno, se articula com o tórax."],
    costelas: ["Dica 1 (Estrutural): São compostos por um agrupamento de 12 pares de ossos.", "Dica 2 (Função): Ossos longos e curvos que formam a caixa torácica, protegendo órgãos vitais como o coração e os pulmões.", "Dica 3 (Curiosidade): Os dois últimos pares de costelas são conhecidos como 'flutuantes' por não estarem ligados ao esterno."],
    umero: ["Dica 1 (Estrutural): Osso longo do braço.", "Dica 2 (Função): Ele se conecta à escápula na articulação do ombro e ao rádio e à ulna na articulação do cotovelo.", "Dica 3 (Curiosidade): Trata-se do osso mais longo do membro superior."],
    radio: ["Dica 1 (Estrutural): Osso da parte lateral do antebraço.", "Dica 2 (Função): Na parte proximal articula-se com o úmero e a ulna, e na parte distal com os ossos do carpo e a ulna.", "Dica 3 (Curiosidade): Juntamente com a ulna, compõe o antebraço."],
    ulna: ["Dica 1 (Estrutural): Osso medial do antebraço, localizado paralelamente ao rádio.", "Dica 2 (Função): Juntamente com o úmero, forma a articulação do cotovelo.", "Dica 3 (Curiosidade): Auxilia na flexão e extensão do cotovelo."],
    fibula: ["Dica 1 (Estrutural): Osso fino da perna, paralelo à tíbia.", "Dica 2 (Função): Localiza-se póstero-lateralmente à tíbia e tem como principal função a fixação de músculos.", "Dica 3 (Curiosidade): Está ligado à tíbia (proximal e distalmente) e ao tálus de forma distal."],
    mandibula: ["Dica 1 (Estrutural): Único osso móvel da face.", "Dica 2 (Função): Permite a movimentação da boca.", "Dica 3 (Curiosidade): É um osso ímpar que contém a arcada dentária inferior."],
    sacro: ["Dica 1 (Estrutural): Encontra-se na base da coluna vertebral.", "Dica 2 (Função): Conecta a coluna à pelve.", "Dica 3 (Curiosidade): Formado por cinco vértebras fundidas, assemelha-se a uma pirâmide, onde a base está voltada para cima e o ápice para baixo."],
    coccix: ["Dica 1 (Estrutural): Está situado na porção inferior e final da coluna vertebral.", "Dica 2 (Função): Tem como função facilitar os movimentos entre ele e o sacro.", "Dica 3 (Curiosidade): Por meio da ligação com o sacro, forma a articulação sacrococcígea."],
    patela: ["Dica 1 (Estrutural): Situado na face anterior do joelho.", "Dica 2 (Função): Protege a articulação do joelho.", "Dica 3 (Curiosidade): É considerada o maior osso sesamoides do corpo humano."],
    esfenoide: ["Dica 1 (Estrutural): Osso localizado na base do crânio.", "Dica 2 (Função): Ajuda a formar a base do crânio e as órbitas oculares.", "Dica 3 (Curiosidade): Tem formato de um morcego."],
    hioide: ["Dica 1 (Estrutural): Situa-se abaixo da mandíbula, na parte anterior do pescoço.", "Dica 2 (Função): Sua função é participar das atividades de deglutição, fala, mastigação e respiração.", "Dica 3 (Curiosidade): É o único dos 206 ossos do corpo humano que não estabelece uma conexão direta com outro osso, conectando-se apenas aos músculos ao seu redor."],
    occipital: ["Dica 1 (Estrutural): Osso localizado na parte posterior do crânio.", "Dica 2 (Função): Forma a base do crânio.", "Dica 3 (Curiosidade): Contém o forame magno, abertura em formato oval, onde passa a medula espinhal."],
    etmoide: ["Dica 1 (Estrutural): Osso que forma parte da cavidade nasal.", "Dica 2 (Função): Separa o cérebro da cavidade nasal.", "Dica 3 (Curiosidade): Tem uma estrutura esponjosa."],
    talus: ["Dica 1 (Estrutural): Osso que ao articula-se com a tíbia e a fíbula, formando o tornozelo.", "Dica 2 (Função): Também articula-se com o calcâneo.", "Dica 3 (Curiosidade): A articulação talocrural, que liga os ossos tíbia, fíbula e tálus, permite que o pé realize movimentos de flexão plantar e dorsiflexão, funcionando como uma espécie de dobradiça."],
    zigomatico: ["Dica 1 (Estrutural): Osso que forma a maçã do rosto.", "Dica 2 (Função): Proeminência que influencia no formato da bochecha e do assoalho da órbita.", "Dica 3 (Curiosidade): A ligação entre os ossos zigomático, temporal e maxilar constitui o arco zigomático, também conhecido como a 'maçã' do rosto."],
    atlas: ["Dica 1 (Estrutural): 1º vértebra cervical.", "Dica 2 (Função): Forma a articulação atlantoccipital.", "Dica 3 (Curiosidade): O nome da articulação atlantoccipital é derivado da ligação entre a primeira vértebra (atlas) e o forame magno do osso occipital."],
    halux: ["Dica 1 (Estrutural): 1º falange do membro inferior.", "Dica 2 (Função): Apenas 2 ossos compõem essa estrutura, a falange proximal e distal.", "Dica 3 (Curiosidade): Os dedos são formados pelas falanges, que são as extremidades finais dos membros inferiores."],
    axis: ["Dica 1 (Estrutural): 2º vértebra da coluna cervical.", "Dica 2 (Função): Apresenta uma protuberância chamada 'dente' (processo odontoide).", "Dica 3 (Curiosidade): Articula-se com a atlas."],
    escafoide: ["Dica 1 (Estrutural): Pequeno osso do carpo, localizado no pulso.", "Dica 2 (Função): Compõe a fileira proximal do ossos do carpo.", "Dica 3 (Curiosidade): O pulso é formado pelo conjunto de ossos do carpo no esqueleto humano."],
    calcaneo: ["Dica 1 (Estrutural): Trata-se do maior osso do tarso.", "Dica 2 (Função): Todo o peso e impactos do corpo humano são absorvidos por esse osso.", "Dica 3 (Curiosidade): Articula-se com os ossos cuboide, o navicular e o tarso."],
    esterno: ["Dica 1 (Estrutural): Osso localizado na parte central do tórax.", "Dica 2 (Função): Protege o coração e os pulmões.", "Dica 3 (Curiosidade): Osso plano e alongado, composto por 3 partes: manúbrio, corpo e processo xifoide."],
    pelve: ["Dica 1 (Estrutural): Estrutura óssea do membro inferior, composta pelos dois ossos do quadril, ligados pela sínfise púbica e pelo sacro.", "Dica 2 (Função): Tem a função de sustentar o peso corporal e realizar locomoção, além de contribuir para o equilíbrio e a estabilidade do corpo.", "Dica 3 (Curiosidade): Também chamado de quadril, é o local onde os ossos ílio, ísquio e púbis se unem, dando origem à pelve."],
    maxilar: ["Dica 1 (Estrutural): São fundamentais para a formação da órbita ocular, cavidade nasal e palato.", "Dica 2 (Função): As funções deste osso também estão associadas às atividades de mastigação e comunicação.", "Dica 3 (Curiosidade): É o único osso da face que se articula com outros 9 ossos do crânio, exceto a mandíbula. Dois localizados no neurocrânio (frontal e etmoide) e sete no viscerocrânio (nasal, lacrimal, zigomático, palatino, vômer, concha nasal inferior e maxila oposta)."],
    vomer: ["Dica 1 (Estrutural): Forma o septo nasal.", "Dica 2 (Função): Posiciona-se verticalmente na cavidade nasal, dividindo-a em duas partes e estabelecendo a linha medial do viscerocrânio (esqueleto da face).", "Dica 3 (Curiosidade): A partir de sua parte anterior, o osso vômer estabelece conexões com quatro outros ossos cranianos: esfenoide, etmoide, maxilar e palatino."],
};

let currentHintIndex = 0;

const hintContainer = document.getElementById("hint-container");

// Atualize a função `startGame` para reiniciar o índice de dicas
function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    attemptsLeft = 6;
    currentHintIndex = 0; // Reinicia o índice de dicas
    messageDisplay.textContent = "";
    alphabetContainer.innerHTML = "";
    hintContainer.innerHTML = ""; // Limpa as dicas
    createAlphabet();
    updateDisplay();
}

// Atualize a função `handleGuess` para exibir as dicas
function handleGuess(letter, letterElement) {
    if (guessedLetters.includes(letter)) return;

    guessedLetters.push(letter);

    if (selectedWord.includes(letter)) {
        letterElement.classList.add("correct");
        updateWordDisplay(letter);
        if (isWordComplete()) {
            messageDisplay.textContent = "Parabéns! Você adivinhou a palavra!";
            disableAlphabet();
        }
    } else {
        letterElement.classList.add("wrong");
        attemptsLeft--;
        showHint(); // Exibe a dica ao errar
        if (attemptsLeft === 0) {
            messageDisplay.textContent = `Fim de jogo! A palavra era "${selectedWord}".`;
            disableAlphabet();
        }
    }

    updateDisplay();
}

// Função para exibir a dica
function showHint() {
    const wordHints = hints[selectedWord];
    if (wordHints && currentHintIndex < wordHints.length) {
        const hintElement = document.createElement("div");
        hintElement.textContent = wordHints[currentHintIndex];
        hintElement.classList.add("hint");
        hintContainer.appendChild(hintElement); // Adiciona a nova dica ao contêiner
        currentHintIndex++;
    }
}