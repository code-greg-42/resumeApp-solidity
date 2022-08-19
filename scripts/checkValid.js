const address = '0x0173D73AE2D567a8160a1EfEB4fe5673F828666e';

async function main() {

    const pw = ethers.utils.keccak256(ethers.utils.toUtf8Bytes('example'));
    console.log(pw);
    const resume = await hre.ethers.getContractAt("ResumeContract", address);
    const validity = await resume.checkValid(pw);
    console.log(validity);
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});