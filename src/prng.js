import Alea from "alea";

export default {
    int(prefix, max, min) {
        let PRNG = new Alea(`default-${prefix}`)();
        min = Math.ceil(min) || 0;
        max = Math.floor(max) || 1;        
        return Math.floor(PRNG * (max - min + 1)) + min;
    }
}