import chalk from "chalk";

const num = Number(process.argv[2]);

export async function main() {
  console.log("");
  console.log(chalk.green("*********** BATCH CREATE NFT JSON ***********"));
  console.log("");

  if (!num || num <= 0) {
    console.log("");
    console.log(chalk.blue(`Supply number of NFTs to generate as arg to script`));
    console.log("");

    return;
  }

  console.log("");
  console.log(chalk.blue(`Generating JSON for ${num} NFTs`));
  console.log("");
}

main();
