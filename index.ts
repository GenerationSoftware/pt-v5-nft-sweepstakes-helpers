import chalk from "chalk";
import { openSync, closeSync, appendFileSync } from "node:fs";

const num = Number(process.argv[2]);

const DESCRIPTION = `THIS IS THE D3SCRIPTION!`;

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

  type NFT = {
    name: string;
    description: string;
    image: string;
  };

  let data: NFT[] = [];
  for (let i = 0; i < num; i++) {
    data.push({
      name: `Play Test NFT #${i + 1}`,
      description: DESCRIPTION,
      image: "https://arweave.net/lo2NVO4upUtInwmGYKRdsJZ2rRurqwWnmpUi5USvQFs"
    });
  }

  const filePointer = openSync(`batch.json`, "a");
  appendFileSync(filePointer, JSON.stringify(data), "utf8");
  closeSync(filePointer);
}

main();
