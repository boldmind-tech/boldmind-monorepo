import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (_, res) => res.json({ status: "ok" }));

const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(`🚀 {{name}} running on http://localhost:${port}`)
);
