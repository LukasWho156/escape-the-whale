import { GameState } from "./game-state";

class InventoryItem {

    readonly id: string;
    readonly sprite: string;

    onBeforeSelect: (state: GameState) => boolean;

    constructor(id: string, sprite: string) {
        this.id = id;
        this.sprite = sprite;
        this.onBeforeSelect = () => false;
    }

}

export { InventoryItem }