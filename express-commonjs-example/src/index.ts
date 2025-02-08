import express from "express";
import cors from "cors";
import helmet from "helmet";
import { router } from "src/router";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", router);

app.get("/", (_, res) => {
  res.status(200).json({ message: "Hello from Express!" });
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
