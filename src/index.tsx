import { publicIpv4 } from "public-ip";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./style/variables.css";
import { report } from "./tools/report";

(async () => {
	const ip = await publicIpv4();
	report(ip);
})();

const mountNode = document.getElementById("app");

if (mountNode) {
	createRoot(mountNode).render(<App />);
}
