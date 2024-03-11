import { render } from "solid-js/web";

import { CVData } from "../../data";
import * as data from "../../data/data/data.json";
import { CVContent } from "./components/cv-viewer/cv";

import PDFIcon from "./icons/pdf-file.svg";

import "./main.css";

const App = () => {
  return (
    <div>
      <img class="print:hidden" src={PDFIcon} width={48} onClick={() => window.print()} />
      <div class="m-auto w-[850px] pt-[40px] print:p-8">
        <CVContent data={data as CVData} />
      </div>
    </div>
  );
};

render(() => <App />, document.getElementById("root"));
