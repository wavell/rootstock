// TODO: Configure tests
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function () {
it("Should deploy MyToken and assign the total supply to the owner", async function () {
	const [owner] = await ethers.getSigners();

	const MyToken = await ethers.getContractFactory("MyToken");
	const myToken = await MyToken.deploy(1000);
	await myToken.deployed();

	expect((await myToken.totalSupply()).toString()).to.equal('1000');
	expect((await myToken.balanceOf(owner.address)).toString()).to.equal('1000');
		});
});
describe("MyLocation", function () {
  let MyToken, myToken, owner, addr1, addr2;

  beforeEach(async function () {
    MyToken = await ethers.getContractFactory("MyLocation");
    [owner, addr1, addr2,...addrs] = await ethers.getSigners();

    myToken = await MyToken.deploy();
    await myToken.deployed();
  });

  describe("setValue and getValue", function () {
    it("Should set and retrieve values correctly", async function () {
      const key = ethers.utils.formatBytes32String("example_key");
      const value = 42;
      const newValue = 100;

      // Set the initial value
      await myToken.setValue(key, value);

      // Retrieve the value and verify it
      let retrievedValue = await myToken.getValue(key);
      expect(retrievedValue.toNumber()).to.equal(value); // Convert BigNumber to number for comparison

      // Set a new value
      await myToken.setValue(key, newValue);

      // Retrieve the new value and verify it
      let retrievedNewValue = await myToken.getValue(key);
      expect(retrievedNewValue.toNumber()).to.equal(newValue); // Convert BigNumber to number for comparison
    });
  });
})
