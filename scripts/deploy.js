async function main() {
  const starterWord = ethers.utils.keccak256(ethers.utils.toUtf8Bytes('greg42'));

  const resume = await hre.ethers.getContractFactory("ResumeContract");
  const resumeContract = await resume.deploy(starterWord);
  console.log('Deploying contract...');
  await resumeContract.deployed();

  console.log("Contract deployed to:", resumeContract.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
