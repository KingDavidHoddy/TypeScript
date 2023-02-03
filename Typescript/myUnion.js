"use strict";
// allows you to be in a situation when you are not sure of the types without having any. You use the '|'
exports.__esModule = true;
var score = 33;
score = 44;
score = '55';
var david = { name: "David", id: 4567 };
david = { username: "hr", id: 56 };
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id == "string") {
        id.toLowerCase();
    }
}
//array
var data = [1, 2, 3, 4];
var data2 = ['1', '2', '3'];
var data3 = ['1', '2', 3];
var seatAllotment;
seatAllotment = 'aisle';
seatAllotment = 'middle';
