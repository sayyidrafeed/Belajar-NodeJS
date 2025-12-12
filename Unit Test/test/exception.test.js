import {callMe, MyException} from "../src/exception.js";

test("exception", () => {
    expect(() => callMe("Rafee")).toThrow();
    expect(() => callMe("Rafee")).toThrow(MyException);
    expect(() => callMe("Rafee")).toThrow("Ups my exception");
});