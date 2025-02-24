import data from "./data.json";
import { CvDisplayPage } from "./pages/cv-display";
import { ErrorPage } from "./pages/error";

export const App = () => {
  data ? <CvDisplayPage data={data} /> : <ErrorPage />;
};
