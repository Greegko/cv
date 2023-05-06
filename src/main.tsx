import { utils } from "aes-js";
import { render } from "solid-js/web";

import { CVViewer } from "./components/cv-viewer/cv";
import { CVData } from "./interfaces";
import { decrypt } from "./utils/encryption";

import "./main.css";

const key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const binAsString = require("../data/data.bin?binary") as ArrayBuffer;

const data = JSON.parse(utils.utf8.fromBytes(decrypt(key, new Uint8Array(binAsString)))) as CVData;

render(() => <CVViewer cv={data} />, document.getElementById("root"));
