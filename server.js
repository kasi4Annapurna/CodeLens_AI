import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors"; // ✅ ONLY ONCE
import aiRoutes from "./src/routes/ai.routes.js";

const app = express();

app.use(cors()); // ✅ enable CORS
app.use(express.json());

app.use("/ai", aiRoutes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});