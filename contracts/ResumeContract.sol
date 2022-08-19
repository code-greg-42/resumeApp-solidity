// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract ResumeContract {
    address owner;
    mapping(bytes32 => bool) words;

    constructor(bytes32 _starter_word) {
        owner = msg.sender;
        words[keccak256(abi.encodePacked(_starter_word))] = true;
    }

    function addWord(bytes32 _word) public {
        require(msg.sender == owner);
        require(!words[keccak256(abi.encodePacked(_word))]);
        words[keccak256(abi.encodePacked(_word))] = true;
    }

    function addWords(bytes32 _words) public {
        require(msg.sender == owner);
        for (uint256 j = 0; j < _words.length; j++) {
            words[keccak256(abi.encodePacked(_words[j]))] = true;
        }
    }

    function removeWord(bytes32 _word) public {
        require(msg.sender == owner);
        require(words[keccak256(abi.encodePacked(_word))]);
        words[keccak256(abi.encodePacked(_word))] = false;
    }

    function checkValid(bytes32 _pw) public view returns (bool _valid) {
        require(msg.sender == owner);
        _valid = words[keccak256(abi.encodePacked(_pw))];
    }
}
