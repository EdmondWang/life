var arr = ['edmond', 'evan', 'wang'];

// SyntaxError: Return statements are only valid inside functions.
// Object, Array
for (var i = 0; i < arr.length; i++) {
    if (i == 1) {
        return false;
    }
}

// SyntaxError: Return statements are only valid inside functions.
// Object, Array
for (var i in arr) {
    if (i == 1) {
        return false;
    }
    console.log(arr[i]);
}

// SyntaxError: Return statements are only valid inside functions.
// Map, Set
for (var i of arr) {
    if (i == 1) {
        return false;
    }
    console.log(arr[i]);
}
