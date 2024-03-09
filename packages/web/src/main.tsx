import { render } from "solid-js/web";

import { CVData } from "../../data";
import * as data from "../../data/data/data.json";
import { CVViewer } from "./components/cv-viewer/cv";

import "./main.css";

render(() => <CVViewer cv={data as CVData} />, document.getElementById("root"));
