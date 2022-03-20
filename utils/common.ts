export {};

/**
 * Random colored text
 * <rabbitfighter@cryptolab.net>
 */

// Converts integer to hex 
const colToHex = (c: number) => {
    // Hack so colors are bright enough
    let color = (c < 75) ? c + 75 : c
    let hex = color.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

// uses colToHex to concatenate
// a full 6 digit hex code
const rgbToHex = (r: number, g: number, b: number) => {
    return "#" + colToHex(r) + colToHex(g) + colToHex(b);
}

// Returns three random 0-255 integers
const getRandomColor = () => {
    return rgbToHex(
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255));
}

declare global {
    interface Array<T> {
        randomColor(): string;
    }
}

interface Function {
    randomColor(): string;
}

// This is the prototype function
// that changes the color of each
// letter by wrapping it in a span
// element.

Array.prototype.randomColor = function () {
    let html = '';
    this.map((letter) => {
        let color = getRandomColor();
        html +=
            "<span style=\"color:" + color + "\">"
            + letter +
            "</span>";
    })
    return html;
};

export const initials = (name: string) => {
    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');

    let initials = [...name.matchAll(rgx)] || [];

    let a = (
        (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
    ).toUpperCase();

    return a;
}