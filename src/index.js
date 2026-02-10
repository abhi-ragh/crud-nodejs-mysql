import app from "./app.js";
import { loadSecrets } from "./secrets.js";

async function start() {
  await loadSecrets();

  const port = app.get("port");
  app.listen(port, () => {
    console.log(`server on port ${port}`);
  });
}

start();
