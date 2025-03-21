var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    scale: {
        mode: Phaser.Scale.RESIZE, // A tela vai ser redimensionada sozinha"
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

var game = new Phaser.Game(config);

var peixinho;
var tartaruga;

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe', 'assets/peixes/peixinho_rosa.png');
    this.load.image('tart', 'assets/peixes/tartaruga.png');
}

function create() {
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(0.5);

    peixinho = this.add.image(400, 300, 'peixe');
    peixinho.setFlip(true, false);

    tartaruga = this.add.image(peixinho.x + 100, peixinho.y, 'tart');

    // Adiciona um ouvinte para detectar mudanças na orientação
    window.addEventListener('resize', resizeGame, false);

    // Inicializa o redimensionamento
    resizeGame.call(this);
}

function update() {
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}

function resizeGame() {
    var gameWidth = this.cameras.main.width;
    var gameHeight = this.cameras.main.height;

    // Atualiza a posição do peixe e da tartaruga com base na nova resolução
    peixinho.x = gameWidth / 2;
    peixinho.y = gameHeight / 2;

    tartaruga.x = peixinho.x + 100;
    tartaruga.y = peixinho.y;

    // Ajuste do logo conforme o tamanho da tela
    this.children.getByName('logo').setPosition(gameWidth / 2, gameHeight - 75);

    // Ajuste do fundo
    this.children.getByName('mar').setPosition(gameWidth / 2, gameHeight / 2);
}
