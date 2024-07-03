# v5-batch-create-fake-users

Creates thousands (hundreds of thousands?) of fake users via multicall sends on testnets (Sepolia/Mumbai/etc) for testing the v5 hyperstructure.

## 💾 &nbsp; Installation

Install dependencies:

```
yarn
```

Make sure you have `direnv` installed and copy `.envrc.example` to `.envrc`:

```
cp .envrc.example .envrc
```

Fill in your own values for `.envrc`, then run:

```
direnv allow
```

**NOTE**: For the `PRIVATE_KEY` env variable we recommend using a fresh wallet specifically for testnets and not your production wallets!

```

Example usage:

```

`$ tsx ./index.ts --total=100 --name='NFT Test' --description='This is just a test' --imageUrl='https://arweave.net/lo2NVO4upUtInwmGYKRdsJZ2rRurqwWnmpUi5USvQFs'`

```

```
