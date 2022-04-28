require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors())

const connectDatabase = require("./database/connect");
const authenticateUser = require("./middlewares/authentication");

// routers
const authRouter = require("./routes/authentication");
const userRouter = require("./routes/users");

// error handler
const notFoundMiddleware = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");

app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// routes
app.use("/api/auth", authRouter);
app.use("/api/users", authenticateUser, userRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await connectDatabase(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening to port ${port}!!!`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
