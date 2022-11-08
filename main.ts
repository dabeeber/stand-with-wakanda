sprites.onOverlap(SpriteKind.Guard, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    namor.setPosition(148, 2)
})
info.onScore(50, function () {
    namor.destroy()
    scene.setBackgroundImage(assets.image`boston-bridge`)
    game.showLongText("thats a nice thing carved in to the building", DialogLayout.Center)
    game.over(true)
    game.showLongText("we are safe but what ever", DialogLayout.Bottom)
    effects.starField.startScreenEffect()
    riri.sayText("WAKANDA FOREVER", 5000, true)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 2331, 3826, 255, 255, 2664, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 4086, 255, 0, 2906, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 1610, 2842, 249, 112, 9999, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    namor.setPosition(148, 2)
})
let namor: Sprite = null
let riri: Sprite = null
game.showLongText("use the arrow keys or  W A S D to move and space to click A and X for B", DialogLayout.Full)
game.showLongText("help me daddy (by that i mean shuri and okoye)", DialogLayout.Full)
game.showLongText("dont let ur uncle catch u (namor)", DialogLayout.Full)
game.showLongText("earn 30 points to win and keep ur hearts", DialogLayout.Full)
game.showLongText("defeet namor and get to boston bridge", DialogLayout.Full)
info.setLife(10)
scene.setBackgroundImage(assets.image`wakanda`)
riri = sprites.create(assets.image`riri`, SpriteKind.Player)
controller.moveSprite(riri)
riri.setStayInScreen(true)
namor = sprites.create(assets.image`namor`, SpriteKind.Enemy)
namor.setPosition(148, 2)
namor.follow(riri, 30)
let shuri = sprites.create(assets.image`shuri`, SpriteKind.Guard)
let okoye = sprites.create(assets.image`okoye`, SpriteKind.Guard)
controller.moveSprite(shuri, 34, -53)
controller.moveSprite(okoye, -68, -58)
forever(function () {
    music.playMelody("F A C5 F D A E C5 ", 300)
    music.playMelody("C5 G E D B C A F ", 310)
})
