export default function toPersianNumber(num) {
    const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

    return num
        .toString()
        .split("")
        .map((index) => farsiDigits[index])
        .join("");
}