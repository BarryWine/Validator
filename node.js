const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePhone(phone) {
    const phonePattern = /^\d{10,13}$/; // Nomor telepon 10-13 digit angka
    return phonePattern.test(phone);
}

rl.question("Masukkan email: ", (email) => {
    rl.question("Masukkan nomor telepon: ", (phone) => {
        const isEmailValid = validateEmail(email);
        const isPhoneValid = validatePhone(phone);

        if (isEmailValid && isPhoneValid) {
            console.log("\x1b[32mInputan benar: Email dan nomor telepon valid.\x1b[0m");
        } else if (!isEmailValid && !isPhoneValid) {
            console.log("\x1b[31mInputan salah: Email dan nomor telepon tidak valid.\x1b[0m");
        } else if (!isEmailValid) {
            console.log("\x1b[31mInputan salah: Email tidak valid, namun nomor telepon benar.\x1b[0m");
        } else {
            console.log("\x1b[31mInputan salah: Email benar, namun nomor telepon tidak valid.\x1b[0m");
        }

        rl.close();
    });
});