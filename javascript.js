'use strict';
const detail = {
  firstName: 'deepan',
  lastName: 'raj',
  favoriteFood: 'briyani',
  phno: 144 - 23,
  myFavNum: [4, 4, 5, 6, 7, [3, 4, 5]],
};
const [a = 4, b = 4, , c = 4, , [d = 4, e = 5, j = 0]] = detail.myFavNum;
console.log(a, b, c, d, e);
//swapping
let r = 5;
let s = 6;
[s, r] = [r, s];
console.log(r, s);
