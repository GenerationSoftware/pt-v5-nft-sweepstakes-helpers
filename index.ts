import chalk from "chalk";
import { program } from "commander";
import { openSync, closeSync, writeFileSync } from "node:fs";

program
  .requiredOption("-t, --total <number>")
  .requiredOption("-n, --name <name string>")
  .requiredOption("-d, --description <description string>")
  .requiredOption("-i, --imageUrl <arweave / ipfs / http image url>")
  .requiredOption("-o, --outputFilename <filename string>");

program.parse();

const options = program.opts();
const total = Number(options.total);
const name = options.name;
const description = options.description;
const imageUrl = options.imageUrl;
const filename = options.outputFilename;

export async function main() {
  console.log("");
  console.log(chalk.green("*********** BATCH CREATE NFT JSON ***********"));
  console.log("");

  if (!total || total <= 0) {
    console.log("");
    console.log(
      chalk.blue(`Supply number of NFTs to generate as arg to script (-t or --total option)`)
    );
    console.log("");

    return;
  }

  console.log("");
  console.log(chalk.blue(`Generating JSON for ${total} NFTs`));
  console.log("");
  console.log(chalk.blue(`Name: ${name}`));
  console.log(chalk.blue(`Description: ${description}`));
  console.log(chalk.blue(`Image URL: ${imageUrl}`));
  console.log(chalk.blue(`Output filename: ${filename}`));
  console.log("");

  type NFT = {
    name: string;
    description: string;
    image: string;
  };

  let data: NFT[] = [];
  for (let i = 0; i < total; i++) {
    data.push({
      name: `${name} #${i + 1}`,
      description,
      image: imageUrl
    });
  }

  const filePointer = openSync(filename, "w");
  writeFileSync(filePointer, JSON.stringify(data), "utf8");
  closeSync(filePointer);
}

main();
