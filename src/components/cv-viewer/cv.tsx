import { Component, For } from "solid-js";

import { CVData, DateString, QuoteBlock, TableBlock, TextBlock, WorkExperienceBlock } from "../../interfaces";

interface CVViewerProperties {
  cv: CVData;
}

export const CVViewer: Component<CVViewerProperties> = ({ cv }) => (
  <div class="container m-auto w-[850px] pt-[40px]">
    <Header cv={cv} />

    <div class="my-4"> </div>

    <For each={cv.blocks}>
      {block => {
        if (block.type === "text") return <TextBlockView {...block} />;
        if (block.type === "work-experience") return <WorkExperienceBlockView {...block} />;
        if (block.type === "table") return <TableBlockView {...block} />;
        if (block.type === "quote") return <QuoteBlockView {...block} />;
      }}
    </For>

    <div class="mb-4"></div>

    <LastUpdateView date={cv.lastUpdate} />
  </div>
);

const Header: Component<CVViewerProperties> = ({ cv }) => (
  <div class="flex flex-row">
    <div class="grow">
      <div class="text-3xl font-bold">{cv.name}</div>

      <div class="columns-2 mt-4">
        <div class="mb-4">
          <div class="font-bold">Mobile Phone</div>
          <div class="text-gray-500">{cv.mobilePhone}</div>
        </div>

        <div class="mb-4">
          <div class="font-bold">Email Address</div>
          <div class="text-gray-500">
            <a href={"mailto: " + cv.email}> {cv.email}</a>
          </div>
        </div>

        <div class="mb-4">
          <div class="font-bold">Permanent Residence</div>
          <div class="text-gray-500">{cv.residence}</div>
        </div>

        <div class="mb-4">
          <div class="font-bold">Citizenship</div>
          <div class="text-gray-500">{cv.citizenship}</div>
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
    <div class="text-xl font-bold text-red-800 my-2 border-b border-black">{title}</div>
    <div>{content}</div>
  </div>
);

const TableBlockView: Component<TableBlock> = ({ title, content }) => (
  <div>
    <div class="text-xl font-bold text-red-800 my-2 border-b border-black">{title}</div>
    <div>{content}</div>
  </div>
);

const WorkExperienceBlockView: Component<WorkExperienceBlock> = ({ title, content }) => (
  <div>
    <div class="text-xl font-bold text-red-800 my-2 border-b border-black">{title}</div>
    <div>{}</div>
  </div>
);

const QuoteBlockView: Component<QuoteBlock> = ({ content, author }) => (
  <div class="max-w-max mx-auto">
    <div class="text-xl text-center">"{content}"</div>
    <div class="text-right -mr-10">{author}</div>
  </div>
);

const LastUpdateView: Component<{ date: DateString }> = ({ date }) => (
  <div class="text-sm text-center text-gray-400">Last Update: {date}</div>
);
