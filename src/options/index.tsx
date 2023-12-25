import { createRoot } from "react-dom/client";
import { Options } from "./Options";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);
root.render(<Options />);
