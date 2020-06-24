import tap from './tap.js'
import go1 from './go1.js'

export default function (f) {
    let ongoing = false;
    return (...args) => {
        if (ongoing) return;
        ongoing = true;
        return go1(
            f(...args),
            tap(() => (ongoing = false))
        );
    };
};