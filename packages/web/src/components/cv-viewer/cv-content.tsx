import { For, Show, createSignal } from "solid-js";
import { CVData } from "../../../../data";

export const CVContent = (props: { data: CVData }) => {
  let [showMoreExperienceEntries, setShowMoreExperienceEntries] = createSignal(false);

  return (
    <div class="flex gap-2">
      <div class="w-[200px] bg-[#183c6c] text-[#ccdcec] p-2 *:px-2 *:py-1">
        <div class="text-xl font-bold">{props.data.personal.name}</div>
        <div>{props.data.personal.position}</div>

        <div class="bg-[#0f2b50] mx-[-8px] !px-4">Personal Information</div>
        <div>
          <div>Phone</div>
          <div>{props.data.personal.mobilePhone}</div>
          <div>Email</div>
          <div>{props.data.personal.email}</div>
          <div>Address</div>
          <div>{props.data.personal.address}</div>
          <div>{props.data.personal.swissPermit}</div>
          <div>Citizenship</div>
          <div>{props.data.personal.citizenship}</div>
          <div>
            <a href={props.data.personal.website}>www</a>
            <a href={props.data.personal.linkedin}>LinkedIn</a>
            <a href={props.data.personal.github}>Github</a>
          </div>
        </div>
        <div class="bg-[#0f2b50] mx-[-8px] !px-4">Soft Skills</div>
        <For each={props.data.softSkills}>
          {([language, scale, scaleText]) => <Scale name={language} scale={scale} scaleText={scaleText} />}
        </For>

        <div class="bg-[#0f2b50] mx-[-8px] !px-4">Technical skills</div>
        <For each={props.data.technicalSkills}>
          {([language, scale, scaleText]) => <Scale name={language} scale={scale} scaleText={scaleText} />}
        </For>

        <div class="bg-[#0f2b50] mx-[-8px] !px-4">Languages</div>
        <For each={props.data.languages}>
          {([language, scale, scaleText]) => <Scale name={language} scale={scale} scaleText={scaleText} />}
        </For>
      </div>
      <div class="flex-1 p-2">
        <div class="text-pretty">{props.data.introduction}</div>
        <div class="relative m-4">
          <div class="text-5xl absolute font-[sans-serif]">“</div>
          <div class="p-4 pb-0 pl-6">{props.data.quote.text}</div>
          <div class="text-right">{props.data.quote.author}</div>
        </div>
        <div class="border-b-2 border-t-2 border-b-[#183c6c] border-t-[#183c6c] text-[#183c6c]">
          <div class="flex justify-between">
            <span class="font-bold">Work Experience</span>
            <span
              class="text-sm self-center hover:cursor-pointer print:hidden"
              onClick={() => setShowMoreExperienceEntries(x => !x)}
            >
              <Show when={showMoreExperienceEntries()} fallback={<>(show old entries)</>}>
                (hide old entries)
              </Show>
            </span>
          </div>
        </div>

        <For each={showMoreExperienceEntries() ? props.data.workExperiences : props.data.workExperiences.slice(0, 4)}>
          {experience => (
            <Block marginClass="my-3">
              <div>
                {experience.period[0]} - {experience.period[1]}
              </div>
              <div>
                <div class="font-bold">
                  {experience.title} / {experience.position}
                </div>
                <div class="text-sm">{experience.tags.map(x => `#${x}`).join(", ")}</div>
                <div class="text-pretty">
                  <For each={experience.highlights}>{highlight => <div>{highlight}</div>}</For>
                </div>
              </div>
            </Block>
          )}
        </For>

        <div class="border-b-2 border-t-2 border-b-[#183c6c] border-t-[#183c6c] text-[#183c6c] font-bold my-3">
          Education
        </div>

        <Block>
          <div>
            {props.data.education.period[0]} - {props.data.education.period[1]}
          </div>
          <div>
            <div class="font-bold">{props.data.education.title}</div>
            <div>{props.data.education.tags.map(x => `#${x}`).join(", ")}</div>
            <div class="text-pretty">
              <For each={props.data.education.highlights}>{highlight => <div>{highlight}</div>}</For>
            </div>
          </div>
        </Block>

        <div class="border-b-2 border-t-2 border-b-[#183c6c] border-t-[#183c6c] text-[#183c6c] font-bold my-3">
          Trainings and Certificates
        </div>
        <For each={props.data.trainings}>
          {([year, title]) => (
            <Block>
              <div>{year}</div>
              <div>{title}</div>
            </Block>
          )}
        </For>

        <div class="border-b-2 border-t-2 border-b-[#183c6c] border-t-[#183c6c] text-[#183c6c] font-bold my-3">
          Interests
        </div>
        <div class="text-center p-2">{props.data.interests}</div>
      </div>
    </div>
  );
};

// generate tailwind classes: w-1/5 w-2/5 w-3/5 w-4/5 w-5/5
const Scale = (props: { name: string; scaleText: string; scale: number }) => (
  <div>
    <div>{props.name}</div>
    <div class={`w-${props.scale}/5 h-2 bg-white`}></div>
    <div class="text-right">{props.scaleText}</div>
  </div>
);

const Block = (props: { marginClass?: string; children: [JSX.Element, JSX.Element] }) => (
  <div class={"flex " + props.marginClass || ""}>
    <div class="w-[70px]">{props.children[0]}</div>
    <div class="flex-1">{props.children[1]}</div>
  </div>
);
