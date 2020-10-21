module.exports = function toReadable (number) {
    const numbers = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
        11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty',
        30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety', 100: 'hundred',
    };

    let res = '';
    let hundreds = Math.floor(number / 100);
    let tens = Math.floor(number % 100 / 10);
    let units = number % 10;

    if (number === 0) return 'zero';

    if (hundreds > 0) {
        res += numbers[hundreds];
        res += ' hundred';
    }

    if (tens > 1) {
        if (hundreds > 0) {
            res += ' ';
        }
        res += numbers[tens * 10];
        if (units > 0) {
            res += ' ';
            res += numbers[units];
        }
    } else if (tens === 1 || units > 0) {
        if (hundreds > 0) {
            res += ' ';
        }
        res += numbers[tens * 10 + units];
    }

    return res;
}
