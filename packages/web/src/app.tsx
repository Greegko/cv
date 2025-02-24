import { Show, createResource } from "solid-js";
import { isDev } from "solid-js/web";

import { CVData } from "./data";
import { CvDisplayPage } from "./pages/cv-display";
import { ErrorPage } from "./pages/error";

async function getCvData(): Promise<CVData> {
  if (isDev) {
    const localData = await import("../../data/data.json");
    return localData.default;
  } else {
    const response = await fetch("lambda-url");
    return response.json();
  }
}

export const App = () => {
  const [data] = createResource<CVData>(() => getCvData());

  return (
    <Show when={data()} fallback={data.loading ? null : <ErrorPage />} keyed>
      {data => <CvDisplayPage data={data} />}
    </Show>
  );
};
