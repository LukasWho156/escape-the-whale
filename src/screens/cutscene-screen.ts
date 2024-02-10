import { Game, GameScreen, THREE } from "luthe-amp/lib/index";
import { SpriteConfiguration } from "../../../luthe-amp-ts/lib/graphics/utility/i-sprite";
import { RenderSystem } from "luthe-amp/lib/graphics/systems/render-system";
import { createOrthoCam } from "luthe-amp/lib/util/create-ortho-cam";
import { Sprite2D } from "luthe-amp/lib/graphics/utility/sprite-2d";

const makeCutscene = (conf: SpriteConfiguration, frames: number, next: GameScreen) => {

    const screen = new GameScreen();
    const renderSys = new RenderSystem();
    screen.addSystem(renderSys);

    const scene = new THREE.Scene();
    const cam = createOrthoCam();
    renderSys.addRenderPass(scene, cam);

    const sprite = new Sprite2D(conf)
    scene.add(sprite);

    let i = 0;

    screen.addListener('click', () => {
        i += 1;
        if(i >= frames) {
            Game.setActiveScreen(next);
        } else {
            sprite.setFrame(i);
        }
    })

    screen.addSystem({ mount: () => {
        Game.audio.playMusic('soundtrack');
    }})

    return screen;

}

export { makeCutscene }