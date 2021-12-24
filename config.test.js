const sum = require("./public/config/config");

test("Check if the contract address is correct", () => {
  expect(sum).toEqual(
    expect.objectContaining({
      CONTRACT_ADDRESS: "0x18FfC5f1fF7b4d72e96714D6F9a28CA070aF01d2",
    })
  );
});

test("Check if max_supply is correct amount", () => {
  expect(sum).toEqual(
    expect.objectContaining({
      MAX_SUPPLY: 1000,
    })
  );
});

test("Check if wei cost is correct", () => {
  expect(sum).toEqual(
    expect.objectContaining({
      WEI_COST: 10000000000000000,
    })
  );
});
