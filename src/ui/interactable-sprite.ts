import { Sprite2D } from "luthe-amp/lib/graphics/utility/sprite-2d";
import { Interactable } from "../logic/interactable";

class InteractableSprite {

    private interactable: Interactable;
    readonly sprite: Sprite2D;

    constructor(interactable: Interactable) {
        this.interactable = interactable;
        this.sprite = new Sprite2D(interactable.sprite);
        this.sprite.visible = this.interactable.active;
        if(!this.interactable.active) {
            this.sprite.setScale(0);
        };
        this.sprite.setFrame(this.interactable.state);
        interactable.target.addEventListener('activated', () => {
            this.sprite.visible = true;
            this.sprite.setScale(1);
        });
        interactable.target.addEventListener('deactivated', () => {
            this.sprite.visible = false;
            this.sprite.setScale(0);
        });
        interactable.target.addEventListener('statechanged', (e: CustomEvent) => {
            this.sprite.setFrame(e.detail.state);
        });
    }

}

export { InteractableSprite }