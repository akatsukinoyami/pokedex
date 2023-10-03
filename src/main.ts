import "./app.css";
import "bulma/css/bulma.min.css";
import App from "./App.svelte";

const app = new App({ target: document.getElementById("app") as Element });

export default app;
