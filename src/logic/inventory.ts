import { GameState } from "./game-state";
import { InventoryItem } from "./inventory-item";

class Inventory {

    private slots: (InventoryItem|null)[] = new Array(6);
    readonly target: EventTarget = new EventTarget();

    private selectedItem: InventoryItem|null;
    get selected() {
        return this.selectedItem;
    }

    addItem = (item: InventoryItem) => {
        for(let i = 0; i < 6; i++) {
            if(!this.slots[i]) {
                this.slots[i] = item;
                this.target.dispatchEvent(new CustomEvent('itemadded', {detail: {
                    item: item,
                    position: i,
                }}))
                break;
            }
        }
    }

    removeItem = (itemId: string) => {
        for(let i = 0; i < 6; i++) {
            if(this.slots[i]?.id === itemId) {
                this.slots[i] = null;
                this.target.dispatchEvent(new CustomEvent('itemremoved', {detail: {
                    position: i,
                }}));
                break;
            }
        }
    }

    selectSlot = (pos: number, state: GameState) => {
        const item = this.slots[pos];
        if(item != null) {
            if(item.onBeforeSelect(state)) {
                return;
            }
        } 
        this.selectedItem = this.slots[pos];
        this.target.dispatchEvent(new CustomEvent('itemselected', {detail: {
            item: this.selectedItem,
            position: pos,
        }}));
    }

}

export { Inventory }