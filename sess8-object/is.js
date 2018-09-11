// polyfill for Object.prototype.is
export default function(a, b) {
    if (a === 0 && b === 0) {
        return 1 / a === 1 /b;
    }
    if (a !== a) {
        return b !== b;
    }
    return a === b;
};