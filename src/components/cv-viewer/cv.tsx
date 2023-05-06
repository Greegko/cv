import { Component } from "solid-js";

import { CVData } from "../../interfaces";

interface CVViewerProperties {
  cv: CVData;
}

export const CVViewer: Component<CVViewerProperties> = ({ cv }) => <Header cv={cv} />;

const Header: Component<CVViewerProperties> = ({ cv }) => (
  <div class="text-gray-700">
    <div>
      <div>Mobile Phone</div>
      <div>{cv["mobile-phone"]}</div>
    </div>
    <div>
      <div>Email Address</div>
      <div>{cv.email}</div>
    </div>
    <div>
      <div>Residence</div>
      <div>{cv.residence}</div>
    </div>
    <div>
      <div>Citizenship</div>
      <div>{cv.citizenship}</div>
    </div>

    <img src={cv.image} fetchpriority="high" elementtiming={""} />
  </div>
);
