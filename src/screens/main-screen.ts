import { THREE, GameScreen, Game } from "luthe-amp/lib/index";
import { Sprite2D } from "luthe-amp/lib/graphics/utility/sprite-2d"
import { RenderSystem } from "luthe-amp/lib/graphics/systems/render-system";
import { createOrthoCam } from "luthe-amp/lib/util/create-ortho-cam";
import { Inventory } from "../logic/inventory";
import { InventoryPanel } from "../ui/inventory-panel";
import { InventoryItem } from "../logic/inventory-item";
import { ExtendedShaderPass } from "luthe-amp/lib/post-processing/extended-shader-pass";
import { LightShader } from "../ui/light-shader";
import { MouseInteractionSystem } from "luthe-amp/lib/input/mouse-interaction-system";
import { Interactable } from "../logic/interactable";
import { GameState } from "../logic/game-state";
import { Room } from "../ui/room";
import { objects } from "../logic/room/objects";
import { items } from "../logic/room/items";

const createMainScreen = () => {

    const screen = new GameScreen();
    const renderSys = new RenderSystem();
    screen.addSystem(renderSys);

    const scene = new THREE.Scene();
    const cam = createOrthoCam();

    const lightShader = new ExtendedShaderPass(LightShader);
    lightShader.setUniform("center", [1280 / 2, 720 / 2]);

    renderSys.addRenderPass(scene, cam);
    renderSys.addPostProcessingPass(lightShader);

    const background = new Sprite2D({
        texture: "hintergrundinnerei"
    });
    scene.add(background);

    screen.addListener('mousemove', (e: MouseEvent) => {
        lightShader.setUniform("center", [
            e.offsetX,
            Game.height - e.offsetY
        ])
    })

    const mis = new MouseInteractionSystem(Game.width, Game.height, cam, Game.renderer.domElement);
    screen.addSystem(mis);

    const state = new GameState(items, objects, screen);
    const room = new Room(state, mis);
    scene.add(room.scene);

    return screen;

}

export { createMainScreen }