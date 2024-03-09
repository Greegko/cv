import { readFileSync, writeFileSync } from "fs";

import { encrypt } from "./encryption";

const key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const dataContent = readFileSync("./data/data.json");
writeFileSync("./data/data.bin", encrypt(key, dataContent));

const accessContent = readFileSync("./data/access.json");
writeFileSync("./data/access.bin", encrypt(key, accessContent));
