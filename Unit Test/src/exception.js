export class MyException extends Error {

}

export const callMe = (name) => {
    if (name === "Rafee") {
        throw new MyException("Ups my exception");
    } else {
        return "ok";
    }
};