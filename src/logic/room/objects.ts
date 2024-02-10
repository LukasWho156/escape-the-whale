import { Interactable } from "../interactable";

const objects: { [id: string]: Interactable } = {};

objects.symbol1 = new Interactable('symbol1', {
    texture: 'zeichen1',
    x: -300,
    y: 280,
}, true, false);

objects.symbol2 = new Interactable('symbol2', {
    texture: 'zeichen2',
    x: 400,
    y: -200,
}, true, false);

objects.symbol3 = new Interactable('symbol3', {
    texture: 'zeichen3',
    x: -500,
    y: -300,
}, true, false);

const potato = new Interactable('potato', {
    texture: 'potato',
    x: -200,
    y: -200,
});
potato.onInteract = (state) => {
    state.collect('potato');
}
objects.potato = potato;

objects.safe = new Interactable('safe', {
    texture: 'tresor',
    framesX: 2,
    x: 100,
    y: 200,
}, true, false)
objects.safe.state = 1;

const dial1 = new Interactable('dial1', {
    texture: 'ziffern',
    framesX: 3,
    framesY: 2,
    x: 100 - 30,
    y: 200 - 50,
    z: 5,
});
dial1.onInteract = (state) => {
    dial1.state = dial1.state == 4 ? 0 : dial1.state + 1
}
objects.dial1 = dial1;

const dial2 = new Interactable('dial1', {
    texture: 'ziffern',
    framesX: 3,
    framesY: 2,
    x: 100 + 30,
    y: 200 - 35,
    z: 5,
});
dial2.onInteract = (state) => {
    dial2.state = dial2.state == 4 ? 0 : dial2.state + 1
}
objects.dial2 = dial2;

const dial3 = new Interactable('dial1', {
    texture: 'ziffern',
    framesX: 3,
    framesY: 2,
    x: 100 + 90,
    y: 200 - 20,
    z: 5,
});
dial3.onInteract = (state) => {
    dial3.state = dial3.state == 4 ? 0 : dial3.state + 1
}
objects.dial3 = dial3;

const klinke = new Interactable('klinke', {
    texture: 'klinke',
    x: 100 - 10,
    y: 200 + 50,
    z: 5
});
klinke.onInteract = (state) => {
    if(dial1.state === 2 && dial2.state === 3 && dial3.state === 4) {
        state.despawn('dial1');
        state.despawn('dial2');
        state.despawn('dial3');
        state.despawn('klinke');
        objects.safe.state = 0;
        state.spawn('knife');
    }
}
objects.klinke = klinke;

const knife = new Interactable('knife', {
    texture: 'messer',
    x: 100,
    y: 200,
    scaleX: 0.6,
    scaleY: 0.6,
}, false);
knife.onInteract = (state) => {
    state.collect('knife');
}
objects.knife = knife;

const wire = new Interactable('wire', {
    texture: 'kabel',
    x: 200,
    y: -100,
});
wire.onInteract = (state) => {
    state.collect('wire');
}
objects.wire = wire;

const screen = new Interactable('screen', {
    texture: 'computer',
    framesX: 2,
    framesY: 1,
    x: -400,
    y: 120,
});
screen.onInteract = (state) => {
    if(state.inventory.selected?.id === 'battery') {
        state.use('battery');
        screen.state = 0;
    }
}
screen.state = 1;
objects.screen = screen;

const hole = new Interactable('hole', {
    texture: 'loch',
    framesX: 2,
    x: -50,
    y: -50,
});
hole.onInteract = (state) => {
    if(hole.state === 1 && state.inventory.selected?.id === 'dynamite') {
        state.use('dynamite');
        hole.state = 0;
    }
    if(hole.state === 0 && state.inventory.selected?.id === 'matches') {
        state.win();
    }
}
hole.state = 1;
objects.hole = hole;

const dynamite = new Interactable('dynamite', {
    texture: 'dynamit',
    x: -550,
    y: -100,
});
dynamite.onInteract = (state) => {
    state.collect('dynamite');
}
objects.dynamite = dynamite;

export { objects }