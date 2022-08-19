const address = '0x0173D73AE2D567a8160a1EfEB4fe5673F828666e';

async function main() {

  const example = ethers.utils.keccak256(ethers.utils.toUtf8Bytes('example'));

  const resume = await hre.ethers.getContractAt("ResumeContract", address);
  const wordAdded = await resume.addWord(example);
  console.log('Submitting new word...');
  await wordAdded.wait();
  console.log(wordAdded);

}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
