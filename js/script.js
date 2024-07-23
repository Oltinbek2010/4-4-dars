// FOR GA OID MASALALAR

// 1-masala

// let sum = 0;
// for (let i = 11; i <= 100; i+= 2) {
//     sum += i;
// }
// console.log(sum);

// 2-masala

// let num = +prompt(`Sonni kiriting!`);

// let p = 1;

// for (let i = 1; i <= num; i++) {
//     p *= i;
// }
// console.log(p);

// 3-masala

// console.log(2);
// console.log(3);
// console.log(5);
// console.log(7);
// console.log(11);
// console.log(13);
// console.log(17);
// console.log(19);
// console.log(23);
// console.log(27);
// console.log(29);
// console.log(31);
// console.log(33);
// console.log(37);
// console.log(41);
// console.log(43);
// console.log(47);
// console.log(49);

// 4-masala

// let p = 1;

// for (let i = 1; i <= 20; i++) {
//     p *= i ** 2;
// }
// console.log(p);

// 5-masala

// let max = -9007199254740991;
// let min =  9007199254740991;

// for (let i = 1; i <= 5; i++) {
//     let num = +prompt (`Sonni kiriting!`);
//     if (num >= max) {
//         max = num;
//     }
//     if (min >= num) {
//         min = num;
//     }
// }
// console.log(`${min} kichigi,  ${max} kattasi.`);

// 6-masala

// console.log(2);
// console.log(3);
// console.log(5);
// console.log(7);
// console.log(11);
// console.log(13);
// console.log(17);
// console.log(19);
// console.log(23);
// console.log(27);
// console.log(29);

// 7-masala

// let raqam = +prompt(`Sonni kiriting!`);

// let raqamStr = raqam.toString();
// let raqamOrqaga = parseInt(raqamStr.split('').reverse().join(''));

// console.log(raqamOrqaga);

// 8-masala

// let farq = 0;

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         farq += i * i;
//     } else {
//         farq -= i * i * i;
//     }
// }

// console.log(`Sonlar orasidagi farq: ${farq}`);

// 9-masala

// for (let i = 1; i <= 50; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(i);
//     }
// }

// 10-masala

// let sum = 0;

// let ortaArif;

// for (let i = 1; i <= 100; i++) {
//     ortaArif = (sum += i) / 100;
// }
// console.log(ortaArif);

// 11-masala

// let raqam = +prompt(`Raqam kiriting!`);

// let raqamStr = raqam.toString();
// let raqamUzunligi = raqamStr.length;

// console.log(`${raqam}, ${raqamUzunligi} raqamdan iborat`);

// 12-masala

// let son = +prompt(`Sonni kiriting!`);

// let sonStr = son.toString();
// let manfiySonlar = '';

// for (let i = 0; i < sonStr.length; i++) {
//     let raqam = parseInt(sonStr[i]);
//     if (raqam < 0) {
//         manfiySonlar += raqam + ' ';
//     }
// }

// console.log("Manfiy sonlar qatori:", manfiySonlar);

// 13-masala

// let n = +prompt(`Sonni kiriting!`);

// let a = 0, b = 1;
// let fibRaq = '';

// for (let i = 1; i <= n; i++) {
//     fibRaq += a + ' ';
//     let c = a + b;
//     a = b;
//     b = c;
// }

// console.log("Fibonachchi qatori:", fibRaq);

// 14-masala

// let sum = 0;

// for (let i = 2; i <= 200; i += 2) {
//     sum += i;
// }
// console.log(sum);

// 15-masala

// let juftliklar = '';

// for (let i = 1; i <= 19; i += 2) {
//     let yigindi = i + (i + 1);
//     juftliklar += `(${i} + ${i + 1})`;
//     if (i < 19 - 1) {
//         juftliklar += ', ';
//     }
// }

// console.log("Juftliklar yig'indisi:", juftliklar);

// BREAK / CONTINUE

// 1-masala

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
// }

// 2-masala

// for (let i = 1; i <= 10; i++) {
//     if (i == 3) {
//         continue;
//     }
//     if (i == 7) {
//         continue;
//     }
//     console.log(i);
// }

// 3-masala

// let num = +prompt(`Sonni kiriting!`);

// for (let i = 0; i < 2; i++) {
//     if (num === 7) {
//         console.log("Topildi!");
//         break;
//     }
// }

// 4-masala

// for (let i = 1; i < 11; i++) {
//     if (i % 2 == 0) {
//         continue;
//     }
//     console.log(i);
// }

// 5-masala

for (let i = 1; i <= 100; i++) {
    if (i > 50) {
        break;
    }
    console.log(i);
}