// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
	constructor(uint256 initialSupply) ERC20("MyToken", "MTK") {
		_mint(msg.sender, initialSupply);
	}
}

contract MyLocation {
    mapping(bytes32 => int256) private keyValuePairs;

    // Corrected function signatures
    function setValue(bytes32 key, int256 value) public {
        keyValuePairs[key] = value;
    }

    function getValue(bytes32 key) public view returns (int256) {
        return keyValuePairs[key];
    }
}
