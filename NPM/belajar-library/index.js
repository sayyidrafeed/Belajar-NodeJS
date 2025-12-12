export const tambah = (angka) => {
    let total = 0;
    for (const value of angka) {
        total+= value;
    }

    return total;
};

export const sayHello = (nama) => {
    return `Hello ${nama}, this is my library saya.`;
};

