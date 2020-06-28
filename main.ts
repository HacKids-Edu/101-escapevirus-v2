input.onButtonPressed(Button.A, function () {
    if (jogador.get(LedSpriteProperty.X) > 0) {
        jogador.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (jogador.get(LedSpriteProperty.X) < 4) {
        jogador.change(LedSpriteProperty.X, 1)
    }
})
let jogador: game.LedSprite = null
let virus = game.createSprite(randint(0, 5), 0)
jogador = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    if (jogador.isTouching(virus)) {
        game.gameOver()
    } else if (virus.get(LedSpriteProperty.Y) < 4) {
        virus.change(LedSpriteProperty.Y, 1)
        basic.pause(250)
    } else {
        game.addScore(1)
        virus.set(LedSpriteProperty.Y, 0)
        virus.set(LedSpriteProperty.X, randint(0, 5))
    }
})
