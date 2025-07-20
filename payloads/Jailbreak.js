export function GoldHEN() {
    fetch('./payloads/GoldHEN/GoldHEN.bin').then(res => {
        res.arrayBuffer().then(arr => {
            window.pld = new Uint32Array(arr);
        // timeout is moved to lapse.mjs to execute after exploit success
        })
    });
}

export function HEN() {
    fetch('./payloads/HEN/HEN.bin').then(res => {
        res.arrayBuffer().then(arr => {
            window.pld = new Uint32Array(arr);
        // timeout is moved to lapse.mjs to execute after exploit success
        })
    });
}
