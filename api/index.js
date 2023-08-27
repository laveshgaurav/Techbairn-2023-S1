const express = require("express");
const mongoose = require("mongoose");
const checkUser = require("./middleware/checkUser");
const logger = require("morgan");
const userRoutes = require("./routes/userRoutes");

// Application init
const app = express();

// middleware
// app.use(checkUser);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(logger("tiny"));

// routes
app.use("/user", userRoutes);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  mongoose
    .connect(
      "mongodb+srv://webmonk:webmonk@cluster0.gp38f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
    .then(() => console.log("DD Connected"))
    .catch((e) => console.log(e));
});
