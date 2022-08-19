const address = '0x0173D73AE2D567a8160a1EfEB4fe5673F828666e';

async function main() {

const example = ethers.utils.keccak256(ethers.utils.toUtf8Bytes('greg42'));

  const resume = await hre.ethers.getContractAt("ResumeContract", address);
  const wordRemoved = await resume.removeWord(example);
  console.log('Submitting new word...');
  await wordRemoved.wait();
  console.log(wordRemoved);

}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
