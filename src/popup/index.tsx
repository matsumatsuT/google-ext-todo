import { createRoot } from "react-dom/client";
import { Popup } from "./Popup";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);
root.render(<Popup />);
