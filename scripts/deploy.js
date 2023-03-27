async function main(){
  const Skylink = await ethers.getContractFactory("Skylink");
  const skylink = await Skylink.deploy("Skylink","SKY");
 // await skylink.blockComfirmation(1)
  await skylink.deployed();
  console.log("deploying contract to: ", skylink.address);
 

}
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});