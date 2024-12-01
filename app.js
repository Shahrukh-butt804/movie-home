import express from "express";
const app = express();
import cookieParser from "cookie-parser";

import cors from "cors";
const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("working still");
});

// Routes
import userRouter from "./routes/user.route.js";
app.use("/api/v1/users", userRouter);

export { app };
