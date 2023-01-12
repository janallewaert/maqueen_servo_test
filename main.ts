basic.showIcon(IconNames.Yes)
music.playTone(196, music.beat(BeatFraction.Whole))
maqueen.servoRun(maqueen.Servos.S1, 0)
basic.pause(1000)
maqueen.servoRun(maqueen.Servos.S1, 45)
basic.pause(1000)
maqueen.servoRun(maqueen.Servos.S1, 90)
basic.pause(1000)
maqueen.servoRun(maqueen.Servos.S1, 180)
music.playTone(262, music.beat(BeatFraction.Whole))
basic.forever(function () {
	
})
