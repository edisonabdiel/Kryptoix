const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const gasPrice = hre.ethers.utils.parseUnits("50", "gwei");

  const transactionsFactory = await hre.ethers.getContractFactory("Transactions", {
    gasPrice,
  });

  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transactions deployed to address: ", transactionsContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
