"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var duplicateArr = [1, 1, 11, 1, 2, 2, 2, 4, 4, 4, 4, 4, 4, 5, 6, 7, 8, 9, 10, 10];
function checkduplicates(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
function ExactSort(arrOfNums) {
    if (Array.isArray(arrOfNums)) {
        return checkduplicates(arrOfNums.sort(function (a, b) { return a - b; }));
    }
}
var av = [6969, 2343, 12121, 67, 77744, 4744, 1, 2, 34, 5, 6, 6, 7, 7, 8, 9, 9, 10, 30, 38, 43, 500];
console.log(ExactSort(duplicateArr));
console.log(ExactSort(av));
// a function that takes in two strings and compares the two strings
function compare(password, prev) {
    // let hashedPwd: string = 'Brandon'
    if (!password.localeCompare(prev)) {
        console.log('match');
    }
    else {
        console.log('no match');
    }
}
var user = {
    name: "brandon",
    lastname: "nolast",
    email: "b@gmail.com",
    password: "1234",
    age: 20,
    active: true
};
function initUsers(obj) {
    return obj;
}
var track;
(function (track) {
    track[track["LOCATION"] = 0] = "LOCATION";
    track[track["MAP"] = 1] = "MAP";
    track[track["STATE"] = 2] = "STATE";
    track[track["ADDRESS"] = 3] = "ADDRESS";
    track[track["ROAD"] = 4] = "ROAD";
})(track || (track = {}));
var geoLocate = track.ROAD;
