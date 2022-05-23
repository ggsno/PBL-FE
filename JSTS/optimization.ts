function add_num(a: number, b: number): number {
  return a + b;
}

function add_str(a: string, b: string): string {
  return a + b;
}

function add_dif1<T extends string | number>(
  a: T,
  b: T
): T extends string ? string : number {
  return <any>a + <any>b;
}

function add_dif2<T extends string | number>(
  a: T,
  b: T
): T extends string ? string : number {
  return <any>a + <any>b;
}

function add_dif3<T extends string | number>(
  a: T,
  b: T
): T extends string ? string : number {
  return <any>a + <any>b;
}

let start = Date.now();

for (let i = 0; i < 1e9; i++) {
  if (i === 1e5) {
    add_num(i, i + 1);
  } else {
    add_num(i, i);
  }
}
console.log(`number type : ${(Date.now() - start) / 1000} sec`);

start = Date.now();
for (let i = 0; i < 1e9; i++) {
  if (i === 1e5) {
    add_str("1", "1");
  } else {
    add_str("1", "2");
  }
}
console.log(`string type : ${(Date.now() - start) / 1000} sec`);

start = Date.now();
for (let i = 0; i < 1e9; i++) {
  if (i % 2 === 0) {
    add_dif1("1", "1");
  } else {
    add_dif1(i, i);
  }
}
console.log(`different type 1 : ${(Date.now() - start) / 1000} sec`);

start = Date.now();
for (let i = 0; i < 1e9; i++) {
  if (i === 1e5) {
    add_dif2("1", "1");
  } else {
    add_dif2(i, i);
  }
}
console.log(`different type 2 : ${(Date.now() - start) / 1000} sec`);

start = Date.now();
for (let i = 0; i < 1e9; i++) {
  if (i === 1e5) {
    add_dif3(i, i);
  } else {
    add_dif3("1", "1");
  }
}
console.log(`different type 3 : ${(Date.now() - start) / 1000} sec`);
