import imgAnglerfisch from './anglerfisch.png'
import imgAntenne from './antenne.png'
import imgBackground from './background.png'
import imgComputer from './computer.png'
import imgCutscene from './cutscene.png'
import imgDynamit from './dynamit.png'
import imgEndbild from './endbild.png'
import imgExplosion from './explosion.png'
import imgHintergrundInnerei from './hintergrund_innerei.png'
import imgHintergrundWasser from './hintergrund_wasser.png'
import imgInventorySlot from './inventory_slot.png'
import imgKabel from './kabel.png'
import imgKartoffelbatterie from './kartoffelbatterie.png'
import imgKlinke from './klinke.png'
import imgLoch from './loch.png'
import imgMesser from './messer.png'
import imgPotato from './potato.png'
import sfxSoundtrack from './soundtrack.mp3'
import imgStart from './start.png'
import imgStreichholz from './streichholz.png'
import imgStreichholzpackung from './streichholzpackung.png'
import imgTresor from './tresor.png'
import imgWal from './wal.png'
import imgZeichen1 from './zeichen1.png'
import imgZeichen2 from './zeichen2.png'
import imgZeichen3 from './zeichen3.png'
import imgZiffern from './ziffern.png'

const importAssets = (game) => {
	return [
		game.loadTexture(imgAnglerfisch, 'imgAnglerfisch'),
		game.loadTexture(imgAntenne, 'imgAntenne'),
		game.loadTexture(imgBackground, 'imgBackground'),
		game.loadTexture(imgComputer, 'imgComputer'),
		game.loadTexture(imgCutscene, 'imgCutscene'),
		game.loadTexture(imgDynamit, 'imgDynamit'),
		game.loadTexture(imgEndbild, 'imgEndbild'),
		game.loadTexture(imgExplosion, 'imgExplosion'),
		game.loadTexture(imgHintergrundInnerei, 'imgHintergrundInnerei'),
		game.loadTexture(imgHintergrundWasser, 'imgHintergrundWasser'),
		game.loadTexture(imgInventorySlot, 'imgInventorySlot'),
		game.loadTexture(imgKabel, 'imgKabel'),
		game.loadTexture(imgKartoffelbatterie, 'imgKartoffelbatterie'),
		game.loadTexture(imgKlinke, 'imgKlinke'),
		game.loadTexture(imgLoch, 'imgLoch'),
		game.loadTexture(imgMesser, 'imgMesser'),
		game.loadTexture(imgPotato, 'imgPotato'),
		game.loadSound(sfxSoundtrack, { id: 'sfxSoundtrack' }),
		game.loadTexture(imgStart, 'imgStart'),
		game.loadTexture(imgStreichholz, 'imgStreichholz'),
		game.loadTexture(imgStreichholzpackung, 'imgStreichholzpackung'),
		game.loadTexture(imgTresor, 'imgTresor'),
		game.loadTexture(imgWal, 'imgWal'),
		game.loadTexture(imgZeichen1, 'imgZeichen1'),
		game.loadTexture(imgZeichen2, 'imgZeichen2'),
		game.loadTexture(imgZeichen3, 'imgZeichen3'),
		game.loadTexture(imgZiffern, 'imgZiffern'),
	];
}
export { importAssets }