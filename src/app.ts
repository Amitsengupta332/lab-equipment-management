import express from "express";
import cors from "cors";
import userRouter from "./modules/user/user.route";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// app.use(userRouter);

app.use("/api/v1", routes);

export default app;
