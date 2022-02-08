import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("hello world", function() {
 it("Should say hi", async function() {
    // 1. Set Up
    // 2. Deploy Contract
    // 3. Call functions to test

    // String Specified as `getContractFactory` argument is contract name
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hello = await HelloWorld.deploy();
    await hello.deployed();

    expect(await hello.hello()).to.equal("Hello  World")
 })   
})