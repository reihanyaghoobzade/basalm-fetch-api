export default function insertrialcamma(num) {
    let result = "";
    for (let i = 0; i < num.length; i++) {
        let carry = num.substr(num.length - i - 1, 1);
        (i % 3 == 0) & (i > 0) ?
        (result = carry + "," + result) :
        (result = carry + result);
    }
    return result;
}