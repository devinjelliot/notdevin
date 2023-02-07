pragma solidity ^0.8.0;

contract AccessControl {
  mapping(address => uint) public accessLevels;
  address owner;

  constructor() public {
    owner = msg.sender;
  }

  function grantAccess(address _wallet, uint _accessLevel) public {
    require(msg.sender == owner, "Only owner can grant access");
    accessLevels[_wallet] = _accessLevel;
  }

  function readData() public view {
    require(accessLevels[msg.sender] >= 1, "No read access");
    // read data
  }

  function writeData() public {
    require(accessLevels[msg.sender] >= 2, "No write access");
    // write data
  }

  function modifyData() public {
    require(accessLevels[msg.sender] >= 3, "None of that access either");
    // modify data
  }
}

