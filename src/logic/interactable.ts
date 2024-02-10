import { SpriteConfiguration } from "../../../luthe-amp-ts/lib/graphics/utility/i-sprite";
import { GameState } from "./game-state";
import { InventoryItem } from "./inventory-item";

class Interactable {

    readonly id: string;
    readonly sprite: SpriteConfiguration;
    readonly target: EventTarget = new EventTarget();
    private _active: boolean;
    readonly clickable: boolean;

    get active() { return this._active }
    set active(v: boolean) { 
        this._active = v;
        this.target.dispatchEvent(new CustomEvent(v ? 'activated' : 'deactivated'));
    }

    private _state: number = 0;
    get state() { return this._state };
    set state(v: number) {
        this._state = v;
        this.target.dispatchEvent(new CustomEvent('statechanged', { detail: { state: this._state }}));
    }

    onInteract: (state: GameState) => void;

    constructor(id: string, sprite: SpriteConfiguration, active: boolean = true, clickable: boolean = true) {
        this.id = id;
        this.sprite = sprite;
        this.active = active;
        this.clickable = clickable;
        this.onInteract = () => {};
    }

}

export { Interactable };