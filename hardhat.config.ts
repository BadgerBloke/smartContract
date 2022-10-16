import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const URL = process.env.GOERLI_URL;
const ACCOUNT = process.env.GOERLI_PRIVATE_KEY as string;

const config: HardhatUserConfig = {
    solidity: "0.8.17",
    networks: {
        goerli: {
            url: URL,
            accounts: [ACCOUNT],
        },
    },
};

export default config;
