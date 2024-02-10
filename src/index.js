import { Game, GameScreen } from 'luthe-amp';
import { connectWS } from 'luthe-amp/lib/util/connect-ws'

import config from './config.json';

import texHintergrundInnerei from './assets/hintergrund_innerei.png';
import texHintergrundWasser from './assets/hintergrund_wasser.png';
import texInventorySlot from './assets/inventory_slot.png';
import texAnglerfisch from './assets/anglerfisch.png';
import texAntenne from './assets/antenne.png';
import texComputer from './assets/computer.png';
import texDynamit from './assets/dynamit.png';
import texKabel from './assets/kabel.png';
import texKartoffelbatterie from './assets/kartoffelbatterie.png';
import texKlinke from './assets/klinke.png';
import texLoch from './assets/loch.png';
import texMesser from './assets/messer.png';
import texPotato from './assets/potato.png';
import texStreichholz from './assets/streichholz.png';
import texStreichholzpackung from './assets/streichholzpackung.png';
import texTresor from './assets/tresor.png';
import texWal from './assets/wal.png';
import texZeichen1 from './assets/zeichen1.png';
import texZeichen2 from './assets/zeichen2.png';
import texZeichen3 from './assets/zeichen3.png';
import texZiffern from './assets/ziffern.png';
import texCutscene from './assets/cutscene.png';
import texEndbild from './assets/endbild.png';
import texExplsosion from './assets/explosion.png';
import texStart from './assets/start.png';

import soundtrack from './assets/soundtrack.mp3';

import { createMainScreen } from './screens/main-screen.ts';
import { createCutscene, makeCutscene } from './screens/cutscene-screen.ts';

async function main() {

    //debug: connect to websocket server to enable automatic reloading
    connectWS();

    Game.init(config);

    const promises = [

        Game.loadTexture(texHintergrundInnerei, "hintergrundinnerei"),
        Game.loadTexture(texHintergrundWasser, "hintergrundwasser"),
        Game.loadTexture(texAnglerfisch, "anglerfisch"),
        Game.loadTexture(texAntenne, "antenne"),
        Game.loadTexture(texComputer, "computer"),
        Game.loadTexture(texDynamit, "dynamit"),
        Game.loadTexture(texKabel, "kabel"),
        Game.loadTexture(texKartoffelbatterie, "kartoffelbatterie"),
        Game.loadTexture(texKlinke, "klinke"),
        Game.loadTexture(texLoch, "loch"),
        Game.loadTexture(texMesser, "messer"),
        Game.loadTexture(texPotato, "potato"),
        Game.loadTexture(texStreichholz, "streichholz"),
        Game.loadTexture(texStreichholzpackung, "streichholzpackung"),
        Game.loadTexture(texTresor, "tresor"),
        Game.loadTexture(texWal, "wal"),
        Game.loadTexture(texZeichen1, "zeichen1"),
        Game.loadTexture(texZeichen2, "zeichen2"),
        Game.loadTexture(texZeichen3, "zeichen3"),
        Game.loadTexture(texZiffern, "ziffern"),
        Game.loadTexture(texCutscene, "cutscene"),
        Game.loadTexture(texEndbild, "endbild"),
        Game.loadTexture(texExplsosion, "explosion"),
        Game.loadTexture(texStart, "start"),
        Game.loadTexture(texInventorySlot, "inventorySlot"),

        Game.loadSound(soundtrack, { id: 'soundtrack', loop: true }),

    ];

    await Promise.all(promises);

    const playScreen = createMainScreen();
    
    const startScreen = makeCutscene({
        texture: 'start',
        framesX: 2,
        framesY: 3,
    }, 5, playScreen);
    
    Game.setActiveScreen(startScreen);

    Game.start();

}

main();