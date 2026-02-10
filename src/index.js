import app from "./app.js";
import { loadSecrets } from "./secrets.js";
import { initDB } from "./db.js";

async function start() {
  await loadSecrets();  // 1️⃣ secrets first
  initDB();             // 2️⃣ DB pool second

  const port = app.get("port");
  app.listen(port, () => {
    console.log(`server on port ${port}`);
  });
}

start();
