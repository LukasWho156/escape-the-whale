import { Game, THREE } from "luthe-amp/lib/index"
import { Inventory } from "../logic/inventory";
import { Sprite2D } from "luthe-amp/lib/graphics/utility/sprite-2d";
import { MouseInteractionComponent } from "luthe-amp/lib/input/mouse-interaction-component";
import { MouseInteractionSystem } from "luthe-amp/lib/input/mouse-interaction-system";
import { GameState } from "../logic/game-state";

class InventoryPanel {

    readonly group: THREE.Group;
    private slots: THREE.Group[] = new Array(6);
    private clickables: MouseInteractionComponent[] = new Array(6);

    constructor(inventory: Inventory, state: GameState) {
        this.group = new THREE.Group();
        this.group.position.z = 100;
        for(let i = 0; i < 6; i++) {
            const slot = new THREE.Group();
            const bg = new Sprite2D({ texture: "inventorySlot" });
            bg.opacity = 0.7;
            slot.add(bg);
            slot.position.x = Game.width / 2 - 100;
            slot.position.y = 250 - i * 100;
            this.group.add(slot);
            this.slots[i] = slot;
            const clickable = new MouseInteractionComponent({ cursor: 'pointer' }, bg);
            clickable.addEventListener('click', (e) => {
                inventory.selectSlot(i, state);
            });
            this.clickables[i] = clickable;
        }
        inventory.target.addEventListener('itemadded', (e: CustomEvent) => {
            const sprite = new Sprite2D({ texture: e.detail.item.sprite });
            this.slots[e.detail.position].add(sprite);
        });
        inventory.target.addEventListener('itemremoved', (e: CustomEvent) => {
            this.slots[e.detail.position].children.pop();
        });
        inventory.target.addEventListener('itemselected', (e: CustomEvent) => {
            this.slots.forEach(s => (s.children[0] as Sprite2D).opacity = 0.7);
            if(e.detail.item != null) {
                (this.slots[e.detail.position].children[0] as Sprite2D).opacity = 1.0;
            }
        })
    }

    addToMIS = (mis: MouseInteractionSystem) => {
        this.clickables.forEach(c => mis.add(c));
    }

}

export { InventoryPanel }