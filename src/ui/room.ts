import { THREE } from "luthe-amp/lib/index";
import { GameState } from "../logic/game-state";
import { InteractableSprite } from "./interactable-sprite";
import { MouseInteractionSystem } from "luthe-amp/lib/input/mouse-interaction-system";
import { MouseInteractionComponent } from "luthe-amp/lib/input/mouse-interaction-component";
import { InventoryPanel } from "./inventory-panel";

class Room {

    readonly scene: THREE.Group;

    constructor(state: GameState, mis: MouseInteractionSystem) {
        this.scene = new THREE.Group();
        Object.values(state.objectDB).forEach(o => {
            const s = new InteractableSprite(o);
            this.scene.add(s.sprite);
            if(o.clickable) {
                const c = new MouseInteractionComponent({ cursor: 'pointer' }, s.sprite);
                c.addEventListener('click', () => {
                    o.onInteract(state);
                })
                mis.add(c);
            }
        });
        const panel = new InventoryPanel(state.inventory, state);
        panel.addToMIS(mis);
        this.scene.add(panel.group);
    }

}

export { Room  };