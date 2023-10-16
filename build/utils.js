"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    var dateParts = dateString.split("/").map(function (value) {
        return parseInt(value);
    });
};
exports.dateStringToDate = dateStringToDate;
