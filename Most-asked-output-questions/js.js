//Video Link: https://www.youtube.com/watch?v=65slMcTFSMM

//// Question: 1 ////
//==================
console.log(5 > '15' < 5 );
console.log(7 < '15' < 7);
console.log(7 < '85' > 5);


//// Question: 2 ////
//==================
console.log(1);

setTimeout(() => {
  console.log(2);
}, 1000);

setTimeout(() => {
  console.log(3);
}, 0);

console.log(4);


//// Question: 3 ////
//==================
console.log(1);

setTimeout(() => {
  console.log(2);
}, 1000);

setTimeout(() => {
  console.log(3);
}, 0);

Promise.resolve(1).then(function resolve(){
  setTimeout(() => {
    console.log(4);
  }, 0);
})

console.log(5);


//// Question: 4 ////
//==================
setTimeout(()=> {
  for (var i = 0; i < 4; i++) {
    console.log(i);  
  }  
}, 1000)
for (let i = 0; i < 4; i++) {
  console.log(i);  
}


//// Question: 5 ////
//==================
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 500);  
}

for (let i = 0; i < 4; i++) {
  setTimeout(() => {
    console.log(i);
  }, 3000); 
}

for (let i = 0; i < 2; i++) {
  (function (i) {
    setTimeout(() => {
    console.log(i);
  }, 5000);
})(i);  
}


//// Question: 6 ////
//==================
console.log(["a"] + ["b"]);
console.log([] + []);
console.log(![]);
console.log(![] + []);


//// Question: 7 ////
//==================
console.log(3 < 4 < 5);
console.log(3 > 4 > 5);
console.log(3 > 4 > -1);


//// Question: 8 ////
//==================
const x1 = new Promise((res, req) => {
  setTimeout(res, 500, "one");
})
const x2 = new Promise((res, req) => {
  setTimeout(res, 100, "two");
})

Promise.all([x1, x2]).then(res => {
  console.log(res);
})
Promise.race([x1, x2]).then(res => {
  console.log(res);
})


//// Question: 9 ////
//==================
const a ={};
const b = { key:  "b"};
const c = { key:  "c"};

a[b] = 143;
a[c] = 286;

console.log(a[b]);
console.log(b.toString());


//// Question: 10 ////
//==================
const h1 = {h: "Thor", i: "IM"};
const h2 = {h: "Thor", i: "IM"};
const h3 = h2;

console.log(h1 === h2);
console.log(h1 === h3);
console.log(h2 === h3);


//// Question: 11 ////
//==================
const array1 = [1, 2, 3]
const array2 = [1, 2, 3]
const array3 = array2;

console.log(array1 === array2);
console.log(array2 === array3);


//// Question: 12 ////
//==================
console.log((1 && 2) || 0 || 3);
console.log(null && undefined);
console.log(0 || (1 && 2) || 3);
console.log(null || (2 && 3) || 4);


//// Question: 13 ////
//==================
console.log("good" > "bad");
console.log("Like" < "Like");

console.log("Subscribe" > "Subg");
console.log("SubScribe" > "Subg");

//// Question: 14 ////
//==================
console.log("g" > "11");
console.log("g" > 11);
console.log("" > -1);
console.log("Mahbub" > -1);



