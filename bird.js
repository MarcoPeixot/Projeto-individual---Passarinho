// Configuração do jogo
var config = {
    type: Phaser.AUTO,  // Renderização WebGL
    width: 800,         // Largura do jogo em si
    height: 600,        // Altura do jogo em si

    scene: {
        preload: preload,  // Carrega os recursos necessários antes do jogo começar
        create: create,    // Configura o ambiente inicial do jogo
        update: update     // Atualiza o jogo em um loop contínuo
    }
};

// Inicialização do jogo
var game = new Phaser.Game(config);

// Declaração de variáveis para os passarinhos
var passarinhoVerm;
var passarinhoGreen;
var passarinhoPurple;

// Loop para exibir números de 1 a 10 no console
for (var i = 1; i <= 10; i++) {
    // Exibe o número na posição específica
    console.log(i);
}

// Pré-carregamento das imagens
function preload() {
    // Carrega a imagem de fundo e as sprites dos passarinhos
    this.load.image("bg", "assets/bg_space.png");
    this.load.spritesheet("passarinhoVerm_red", "assets/bird-red.png", { frameWidth: 75, frameHeight: 75 });
    this.load.spritesheet("passarinhoGreen", "assets/bird-green.png", { frameWidth: 75, frameHeight: 75 });
    this.load.spritesheet("passarinhoPurple", "assets/bird-purple.png", { frameWidth: 75, frameHeight: 75 });
}

// Criação dos elementos do jogo
function create() {
    // Adiciona a imagem de fundo e os sprites dos passarinhos ao ambiente de jogo
    this.add.image(400, 300, "bg").setScale(1.2);
    passarinhoVerm = this.add.sprite(100, 100, "passarinhoVerm_red").setScale(1.3);
    passarinhoGreen = this.add.sprite(100, 200, "passarinhoGreen").setScale(1.3);
    passarinhoPurple = this.add.sprite(100, 300, "passarinhoPurple").setScale(1.3);

    // Configurações de animação para os passarinhos
    this.anims.create({
        key: "fly_1",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("passarinhoVerm_red", { start: 0, end: 7 }),
        repeat: -1
    });

    // Criação e configuração de animações para os outros passarinhos (verde e roxo)
    this.anims.create({
        key: "fly_2",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("passarinhoGreen", { start: 0, end: 7 }),
        repeat: -1
    });

    this.anims.create({
        key: "fly_3",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("passarinhoPurple", { start: 0, end: 7 }),
        repeat: -1
    });
    // Inicia as animações para os passarinhos
    passarinhoVerm.anims.play("fly_1", true);
    passarinhoGreen.anims.play("fly_2", true);
    passarinhoPurple.anims.play("fly_3", true);
}

function update() {
    // Lógica do passarinho vermelho
    if (passarinhoVerm.x === 100 && passarinhoVerm.y === 100) {
        passarinhoVerm.ida = true;  // Inicia o movimento para a direita
        passarinhoVerm.virar = false;  // Não vira a direção inicialmente
    }

    if (passarinhoVerm.x < 700 && passarinhoVerm.ida === true) {
        passarinhoVerm.x += 5;  // Move para a direita
    }

    if (passarinhoVerm.x === 700) {
        passarinhoVerm.setFlip(true, false);  // Vira para a esquerda
        passarinhoVerm.virar = true;  // Inicia o movimento para baixo
    }

    if (passarinhoVerm.y < 500 && passarinhoVerm.virar === true) {
        passarinhoVerm.y += 5;  // Move para baixo
    }

    if (passarinhoVerm.y === 500) {
        passarinhoVerm.virar = false;  // Interrompe o movimento para baixo
        passarinhoVerm.ida = false;  // Inicia o movimento para a esquerda
    }

    if (passarinhoVerm.x > 100 && passarinhoVerm.ida === false) {
        passarinhoVerm.x -= 5;  // Move para a esquerda
    }

    if (passarinhoVerm.x === 100 && passarinhoVerm.y > 100 && passarinhoVerm.virar === false) {
        passarinhoVerm.setFlip(false, false);  // Volta para a direção inicial
        passarinhoVerm.y -= 5;  // Move para cima
    }

    // Mesma lógica para os outros passarinhos, só muda o valor de origem deles

    // Lógica do passarinho verde
    if (passarinhoGreen.x === 100 && passarinhoGreen.y === 200) {
        passarinhoGreen.ida = true;
        passarinhoGreen.virar = false;
    }

    if (passarinhoGreen.x < 700 && passarinhoGreen.ida === true) {
        passarinhoGreen.x += 5;
    }

    if (passarinhoGreen.x === 700) {
        passarinhoGreen.setFlip(true, false);
        passarinhoGreen.virar = true;
    }

    if (passarinhoGreen.y < 450 && passarinhoGreen.virar === true) {
        passarinhoGreen.y += 5;
    }

    if (passarinhoGreen.y === 450) {
        passarinhoGreen.virar = false;
        passarinhoGreen.ida = false;
    }

    if (passarinhoGreen.x > 100 && passarinhoGreen.ida === false) {
        passarinhoGreen.x -= 5;
    }

    if (passarinhoGreen.x === 100 && passarinhoGreen.y > 200 && passarinhoGreen.virar === false) {
        passarinhoGreen.setFlip(false, false);
        passarinhoGreen.y -= 5;
    }

    // Lógica do passarinho roxo
    if (passarinhoPurple.x === 100 && passarinhoPurple.y === 300) {
        passarinhoPurple.ida = true;
        passarinhoPurple.virar = false;
    }

    if (passarinhoPurple.x < 700 && passarinhoPurple.ida === true) {
        passarinhoPurple.x += 5;
    }

    if (passarinhoPurple.x === 700) {
        passarinhoPurple.setFlip(true, false);
        passarinhoPurple.virar = true;
    }

    if (passarinhoPurple.y < 400 && passarinhoPurple.virar === true) {
        passarinhoPurple.y += 5;
    }

    if (passarinhoPurple.y === 400) {
        passarinhoPurple.virar = false;
        passarinhoPurple.ida = false;
    }

    if (passarinhoPurple.x > 100 && passarinhoPurple.ida === false) {
        passarinhoPurple.x -= 5;
    }

    if (passarinhoPurple.x === 100 && passarinhoPurple.y > 300 && passarinhoPurple.virar === false) {
        passarinhoPurple.setFlip(false, false);
        passarinhoPurple.y -= 5;
    }
}