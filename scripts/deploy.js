const { ethers } = require("hardhat");

async function main() {

  const _startingBid = hre.ethers.utils.parseEther("1");

  const NFTMarketPlace = await ethers.getContractFactory("NFTMarketPlace")
  const nftMarketPlace = await NFTMarketPlace.deploy()
  await nftMarketPlace.deployed()
  console.log("nftMarketPlace deployed to address:", nftMarketPlace.address)

  const Nft= await ethers.getContractFactory("Nft");
  const nft = await Nft.deploy(nftMarketPlace.address)
  await nft.deployed()
  console.log("nft deployed to address:", nft.address)

  const Auction = await ethers.getContractFactory("Auction");
  const auction = await Auction.deploy(nft.address, 1 , _startingBid)
  await auction.deployed()

  console.log("Auction deployed to address:", auction.address)


}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })