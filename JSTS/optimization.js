function add_num(a, b) {
    return a + b;
}
function add_str(a, b) {
    return a + b;
}
function add_dif1(a, b) {
    return a + b;
}
function add_dif2(a, b) {
    return a + b;
}
function add_dif3(a, b) {
    return a + b;
}
var start = Date.now();
for (var i = 0; i < 1e9; i++) {
    if (i === 1e5) {
        add_num(i, i + 1);
    }
    else {
        add_num(i, i);
    }
}
console.log("number type : ".concat((Date.now() - start) / 1000, " sec"));
start = Date.now();
for (var i = 0; i < 1e9; i++) {
    if (i === 1e5) {
        add_str("1", "1");
    }
    else {
        add_str("1", "2");
    }
}
console.log("string type : ".concat((Date.now() - start) / 1000, " sec"));
start = Date.now();
for (var i = 0; i < 1e9; i++) {
    if (i % 2 === 0) {
        add_dif1("1", "1");
    }
    else {
        add_dif1(i, i);
    }
}
console.log("different type 1 : ".concat((Date.now() - start) / 1000, " sec"));
start = Date.now();
for (var i = 0; i < 1e9; i++) {
    if (i === 1e5) {
        add_dif2("1", "1");
    }
    else {
        add_dif2(i, i);
    }
}
console.log("different type 2 : ".concat((Date.now() - start) / 1000, " sec"));
start = Date.now();
for (var i = 0; i < 1e9; i++) {
    if (i === 1e5) {
        add_dif3(i, i);
    }
    else {
        add_dif3("1", "1");
    }
}
console.log("different type 3 : ".concat((Date.now() - start) / 1000, " sec"));
