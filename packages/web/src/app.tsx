import { Show, createResource } from "solid-js";

import { CVData } from "./data";
import { CvDisplayPage } from "./pages/cv-display";
import { ErrorPage } from "./pages/error";

const GetCVDataEndpoint = "https://zx6yg9u8th.execute-api.eu-north-1.amazonaws.com/default/GetCVData";

async function getCvData(): Promise<CVData> {
  if (import.meta.env.DEV) {
    const localData = await import("../../lambda/data.json");
    return localData.default;
  } else {
    const urlParams = new URLSearchParams(window.location.search);
    const accessKey = urlParams.get("access_key") as string;

    if (!accessKey) return Promise.reject();

    return fetch(GetCVDataEndpoint + "?access_key=" + accessKey)
      .then(x => (x.ok ? x : Promise.reject()))
      .then(x => x.json());
  }
}

export const App = () => {
  const [data] = createResource<CVData>(() => getCvData());

  return (
    <Show when={!data.loading && !data.error} fallback={data.loading ? null : <ErrorPage />}>
      <Show when={data()} keyed>
        {data => <CvDisplayPage data={data} />}
      </Show>
    </Show>
  );
};
