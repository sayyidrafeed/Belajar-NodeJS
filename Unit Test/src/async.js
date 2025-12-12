export const sayHelloAsync = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === "Rafee") {
        resolve(`Hello, ${name}!`);
      } else {
        reject(new Error("Name not recognized"));
      }
    }, 1000);
  });
}

export const getBalance = async (name, from) => {
    const balance = await from();
    return {name: name, balance: balance};
}