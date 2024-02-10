import { Game, GameScreen } from "luthe-amp/lib/index";
import { Interactable } from "./interactable";
import { Inventory } from "./inventory";
import { InventoryItem } from "./inventory-item"
import { makeCutscene } from "../screens/cutscene-screen";

class GameState {

    private itemDB: { [id: string]: InventoryItem };
    readonly objectDB: { [id: string]: Interactable };
    readonly inventory: Inventory

    private screen: GameScreen

    constructor(itemDB: { [id: string]: InventoryItem }, objectDB: { [id: string]: Interactable }, screen: GameScreen) {
        this.itemDB = itemDB;
        this.objectDB = objectDB;
        this.inventory = new Inventory();
        this.screen = screen;
    }

    collect = (id: string) => {
        if(this.objectDB[id]) this.objectDB[id].active = false;
        this.inventory.addItem(this.itemDB[id]);
    }

    spawn = (id: string) => {
        this.objectDB[id].active = true;
    }

    despawn = (id: string) => {
        this.objectDB[id].active = false;
    }

    use = (id: string) => {
        this.inventory.removeItem(id);
    }

    goToCutscene = () => {
        const cutscene = makeCutscene({
            texture: 'cutscene',
            framesX: 2,
            framesY: 2,
        }, 4, this.screen);
        Game.setActiveScreen(cutscene);
    }

    win = () => {
        const end = makeCutscene({
            texture: 'endbild',
        }, 1, null);
        const explosion = makeCutscene({
            texture: 'explosion',
        }, 1, end);
        Game.setActiveScreen(explosion);
    }

}

export { GameState }