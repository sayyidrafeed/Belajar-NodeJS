import _ from "lodash";
import {tambah, sayHello} from "rafee-belajar-library"
import {min, max} from "rafee-belajar-library/number";

const source = "Muhammad Sayyid Rafee' Djamil"
const target = _.capitalize(source);

console.log(target);

console.log(sayHello("rafee"));
console.log(tambah([10, 200, 31]));

console.log(min(1, 3));