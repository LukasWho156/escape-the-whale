import { makeCutscene } from "../../screens/cutscene-screen";
import { InventoryItem } from "../inventory-item";

const items: { [id: string]: InventoryItem } = {};

const potato = new InventoryItem('potato', 'potato')
potato.onBeforeSelect = (state) => {
    if(state.inventory.selected?.id === 'wire') {
        state.use('potato');
        state.use('wire');
        state.collect('battery');
        return true;
    }
    return false;
}
items.potato = potato;

const wire = new InventoryItem('wire', 'kabel');
wire.onBeforeSelect = (state) => {
    if(state.inventory.selected?.id === 'potato') {
        state.use('potato');
        state.use('wire');
        state.collect('battery');
        return true;
    }
    return false;
}
items.wire = wire;

items.battery = new InventoryItem('battery', 'kartoffelbatterie');
items.dynamite = new InventoryItem('dynamite', 'dynamit');
items.matches = new InventoryItem('matches', 'streichholzpackung');
const knife = new InventoryItem('knife', 'messer');
knife.onBeforeSelect = (state) => {
    state.use('knife');
    state.collect('matches');
    state.goToCutscene();
    return true;
}
items.knife = knife;

export { items }