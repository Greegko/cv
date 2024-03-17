import { render } from "solid-js/web";

import { CVData } from "../../data";
import * as data from "../../data/data/data.json";
import { CVContent } from "./components/cv-viewer/cv-content";

import PDFIcon from "./icons/pdf-file.svg";
import CoverLetterIcon from "./icons/cover-letter.svg";
import AdditionalDocumentIcon from "./icons/additional-document.svg";

import "./main.css";

const App = () => {
  return (
    <div class="m-auto w-[850px] p-2  relative">
      <div class="absolute right-[-48px] print:hidden">
        <img src={PDFIcon} width={48} onClick={() => window.print()} />
        <img src={CoverLetterIcon} width={48} onClick={() => window.print()} />
        <img src={AdditionalDocumentIcon} width={48} onClick={() => window.print()} />
      </div>
      <CVContent data={data as CVData} />
    </div>
  );
};

render(() => <App />, document.getElementById("root"));
