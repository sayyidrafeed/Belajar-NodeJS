import {getBalance} from "../src/async.js";

test("mock async function", async () => {
    const from = jest.fn().mockResolvedValue(5000);
    await expect(getBalance("Rafee", from)).resolves
        .toEqual({name: "Rafee", balance: 5000});

    expect(from.mock.calls.length).toBe(1);
    await expect(from.mock.results[0].value).resolves.toBe(5000);
})

test.failing("mock async function rejected", async () => {
    const from = jest.fn().mockRejectedValue(new Error("Network Error"));
    await getBalance("Rafee", from);

    expect(from.mock.calls.length).toBe(1);
    await expect(from.mock.results[0].value).rejects.toThrow("Network Error");
})