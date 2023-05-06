import { Component, For } from "solid-js";

import { CVData, QuoteBlock, TableBlock, TextBlock, WorkExperienceBlock } from "../../interfaces";

interface CVViewerProperties {
  cv: CVData;
}

export const CVViewer: Component<CVViewerProperties> = ({ cv }) => (
  <div class="container m-auto w-[1300px]">
    <Header cv={cv} />

    <For each={cv.blocks}>
      {block => {
        if (block.type === "text") return <TextBlockView {...block} />;
        if (block.type === "work-experience") return <WorkExperienceBlockView {...block} />;
        if (block.type === "table") return <TableBlockView {...block} />;
        if (block.type === "quote") return <QuoteBlockView {...block} />;
      }}
    </For>
  </div>
);

const Header: Component<CVViewerProperties> = ({ cv }) => (
  <div class="flex flex-row">
    <div class="grow">
      <div class="text-3xl font-bold">{cv.name}</div>

      <div>
        <div class="my-4">
          <div>Mobile Phone</div>
          <div>{cv["mobile-phone"]}</div>
        </div>

        <div class="my-4">
          <div>Email Address</div>
          <div>{cv.email}</div>
        </div>

        <div class="my-4">
          <div>Residence</div>
          <div>{cv.residence}</div>
        </div>

        <div class="my-4">
          <div>Citizenship</div>
          <div>{cv.citizenship}</div>
        </div>
      </div>
    </div>

    <div class="flex-none self-center">
      <img src={cv.image} fetchpriority="high" elementtiming={""} />
    </div>
  </div>
);

const TextBlockView: Component<TextBlock> = ({ title, content }) => (
  <div>
    <div class="text-xl font-bold text-red-800 underline my-2">{title}</div>
    <div>{content}</div>
  </div>
);

const TableBlockView: Component<TableBlock> = ({ title, content }) => (
  <div>
    <div class="text-xl font-bold text-red-800 underline my-2">{title}</div>
    <div>{content}</div>
  </div>
);

const WorkExperienceBlockView: Component<WorkExperienceBlock> = ({ title, content }) => (
  <div>
    <div class="text-xl font-bold text-red-800 underline my-2">{title}</div>
    <div>{}</div>
  </div>
);

const QuoteBlockView: Component<QuoteBlock> = ({ content, author }) => (
  <div class="max-w-max mx-auto">
    <div class="text-xl font-bold text-center">"{content}"</div>
    <div class="text-right -mr-10">{author}</div>
  </div>
);
