var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;
var tartaruga;

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe', 'assets/peixes/peixinho_rosa.png');
    this.load.image('tart', 'assets/peixes/tartaruga.png'); // Adicionei .png no final
}

function create() {  
    this.add.image(400, 300, 'mar');

    // Adicionar o logo na tela
    this.add.image(400, 525, 'logo').setScale(0.5);

    // Criar o peixe
    peixinho = this.add.image(400, 300, 'peixe');
    peixinho.setFlip(true, false);

    // Criar a tartaruga ao lado do peixe (deslocada para a direita)
    tartaruga = this.add.image(peixinho.x + 100, peixinho.y, 'tart');
}

function update() {
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;

}
