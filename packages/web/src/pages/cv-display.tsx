import { For } from "solid-js";

import { QRCode } from "../components/qr-code";
import { CVData } from "../data";

export const CvDisplayPage = (props: { data: CVData }) => (
  <div class="md:max-w-3xl md:mx-auto not-print:p-4 lg:not-print:my-4 bg-gray-100 md:not-print:shadow-2xl font-sans">
    <div class="flex justify-between">
      <div>
        <h1 class="text-4xl font-extrabold text-blue-900 border-b-4 border-blue-500 pb-2">{props.data.name}</h1>
        <p class="text-gray-700 mt-2">
          {props.data.contact.residence} | {props.data.contact.citizenship}
        </p>
        <div class="text-gray-700 flex flex-wrap gap-2">
          <div>📞 {props.data.contact.mobile}</div>
          <span class="hidden sm:block">|</span>
          <div>✉️ {props.data.contact.email}</div>
        </div>
      </div>
      <div class="p-2 not-sm:hidden">
        <QRCode text={window.location.href} size={80} />
        <span class="text-xs text-gray-400">Online version</span>
      </div>
    </div>

    <div class="md:flex gap-2 print:flex">
      <section class="flex-4 mt-2 md:mt-0">
        <h2 class="text-xl font-bold text-blue-800">Introduction</h2>
        <p class="text-gray-700 mt-2 leading-relaxed">{props.data.introduction}</p>
      </section>
      <section class="flex-5 mt-2 md:mt-0">
        <h2 class="text-xl font-bold text-blue-800">Summary</h2>
        <ul class="list-disc pl-5 text-gray-700 leading-relaxed">
          <For each={props.data.summary}>{text => <li>{text}</li>}</For>
        </ul>
      </section>
    </div>

    <section class="mt-4">
      <span class="text-2xl font-bold text-blue-800">Work Experience</span>
      <span class="not-print:hidden text-gray-700 text-xs ml-2">(Only recent elements are visible in PDF mode)</span>
      <For each={props.data.work_experience}>
        {(job, index) => (
          <div
            class="mt-2 border-l-4 border-blue-400 pl-4 pb-2 break-inside-avoid"
            classList={{ "print:hidden": index() > 2 }}
          >
            <h3 class="text-xl font-semibold text-gray-900">
              {job.position} - {job.company}
            </h3>
            <p class="text-gray-600 italic text-sm">
              {job.location} ({job.date})
            </p>
            <p class="text-xs text-gray-600 mt-1">{job.tags.map(x => "#" + x).join(", ")}</p>
            <p class="text-gray-700 mt-2 text-lg">{job.responsibilities}</p>
          </div>
        )}
      </For>
    </section>

    <section class="mt-4">
      <h2 class="text-2xl font-bold text-blue-800">Education</h2>
      <p class="text-xl font-semibold text-gray-900">{props.data.education.university}</p>
      <p class="text-gray-600 italic">
        {props.data.education.location} ({props.data.education.date})
      </p>
      <p class="text-gray-700 mt-2 text-lg">{props.data.education.degree}</p>
    </section>

    <section class="mt-4">
      <h2 class="text-2xl font-bold text-blue-800">Certifications</h2>
      <ul class="list-disc pl-5 text-gray-700 text-lg">
        <For each={props.data.certifications}>
          {cert => (
            <li>
              {cert.year} - {cert.certification}
            </li>
          )}
        </For>
      </ul>
    </section>

    <section class="mt-4">
      <h2 class="text-2xl font-bold text-blue-800">Languages</h2>
      <p class="text-gray-700 text-lg">Native: {props.data.languages.native}</p>
      <ul class="list-disc pl-5 text-gray-700 text-lg">
        <For each={props.data.languages.other}>
          {lang => (
            <li>
              {lang.language} - {lang.level}
            </li>
          )}
        </For>
      </ul>
    </section>

    <section class="mt-4">
      <h2 class="text-2xl font-bold text-blue-800">Programming Interests</h2>
      <p class="text-gray-700 text-lg leading-relaxed">{props.data.programming_interests}</p>
    </section>

    <section class="mt-4">
      <h2 class="text-2xl font-bold text-blue-800">Hobbies</h2>
      <p class="text-gray-700 text-lg leading-relaxed">{props.data.hobbies}</p>
    </section>
  </div>
);
