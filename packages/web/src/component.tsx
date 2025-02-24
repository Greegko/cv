import { For } from "solid-js";

import { CVData } from "./data";

export const CvComponent = (props: { data: CVData }) => (
  <div class="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h1 class="text-3xl font-bold text-gray-900">{props.data.name}</h1>
    <p class="text-gray-600">
      {props.data.contact.residence} | {props.data.contact.citizenship}
    </p>
    <p class="text-gray-600">
      📞 {props.data.contact.mobile} | ✉️ {props.data.contact.email}
    </p>

    <section class="mt-6">
      <h2 class="text-2xl font-semibold text-gray-800">Introduction</h2>
      <p class="text-gray-700 mt-2">{props.data.introduction}</p>
    </section>

    <section class="mt-6">
      <h2 class="text-2xl font-semibold text-gray-800">Work Experience</h2>
      <For each={props.data.work_experience}>
        {job => (
          <div class="mt-4 border-b pb-4">
            <h3 class="text-xl font-semibold text-gray-900">
              {job.position} - {job.company}
            </h3>
            <p class="text-gray-600">
              {job.location} ({job.date})
            </p>
            <p class="text-gray-700 mt-2">{job.responsibilities}</p>
          </div>
        )}
      </For>
    </section>

    <section class="mt-6">
      <h2 class="text-2xl font-semibold text-gray-800">Education</h2>
      <p class="text-gray-900 font-semibold">{props.data.education.university}</p>
      <p class="text-gray-600">
        {props.data.education.location} ({props.data.education.date})
      </p>
      <p class="text-gray-700 mt-2">{props.data.education.degree}</p>
      <p class="text-gray-700 mt-2">Thesis: {props.data.education.thesis}</p>
    </section>

    <section class="mt-6">
      <h2 class="text-2xl font-semibold text-gray-800">Certifications</h2>
      <ul class="list-disc pl-5 text-gray-700">
        <For each={props.data.certifications}>
          {cert => (
            <li>
              {cert.year} - {cert.certification}
            </li>
          )}
        </For>
      </ul>
    </section>

    <section class="mt-6">
      <h2 class="text-2xl font-semibold text-gray-800">Languages</h2>
      <p class="text-gray-700">Native: {props.data.languages.native}</p>
      <ul class="list-disc pl-5 text-gray-700">
        <For each={props.data.languages.other}>
          {lang => (
            <li>
              {lang.language} - {lang.level}
            </li>
          )}
        </For>
      </ul>
    </section>

    <section class="mt-6">
      <h2 class="text-2xl font-semibold text-gray-800">Programming Interests</h2>
      <p class="text-gray-700">{props.data.programming_interests}</p>
    </section>

    <section class="mt-6">
      <h2 class="text-2xl font-semibold text-gray-800">Hobbies</h2>
      <p class="text-gray-700">{props.data.hobbies}</p>
    </section>
  </div>
);
