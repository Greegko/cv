import { render } from "solid-js/web";

import * as data from "../../aws-lambda/data/data.json";
import { CVViewer } from "./components/cv-viewer/cv";
import { CVData } from "./interfaces";

import "./main.css";

render(() => <CVViewer cv={data as CVData} />, document.getElementById("root"));
