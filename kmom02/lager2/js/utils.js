/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Lagerappen
 * Daniel Andersson, DAAP19
 * module: utils
*/

"use strict";

const utils = {
    createElement(option) {
        let element = document.createElement(option.type || "div");

        for (let property in option) {
            if (Object.prototype.hasOwnProperty.call(option, property)) {
                element[property] = option[property];
            }
        }

        return element;
    },

    removeNodes(id) {
        let element = document.getElementById(id);

        if (element) {
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        }
    }
};

export default utils;
