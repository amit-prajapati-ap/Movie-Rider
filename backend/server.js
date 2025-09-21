import express from "express";
import cors from "cors";
import 'dotenv/config';
import { connectDB } from "./src/configs/db_config.js";
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./src/configs/inngest_config.js";

const app = express();
const port = 5000;

await connectDB()

//Middlewares
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware())
app.use("/api/inngest", serve({ client: inngest, functions }));

//App Routes
app.get("/", (req, res) => {
  res.send("Hello Duniya!");
});

app.listen(port, () => {
  console.log(`Server is live at http://localhost:${port}`);
});